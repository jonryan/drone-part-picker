const { APP_SECRET, getUserId } = require('../../utils.js')

const resolver = {
  FlightController: {
    postedBy(parent, args, context) {
      return context.prisma.flightController({ id: parent.id }).postedBy()
    },

    merchantLinks(parent, args, context) {
      return context.prisma.flightController({ id: parent.id }).merchantLinks()
    },

    updatedBy(parent, args, context) {
      return context.prisma.flightController({ id: parent.id }).updatedBy()
    }
  },

  Query: {
    async getFlightController(parent, args, context, info){
      const productFound = await context.prisma.flightController({ id: args.id })
      if(!productFound){
        throw new Error(`Flight Controller by ID ${args.id} not found.`)
      }else{
        return productFound
      }
    },

    async flightControllerFeed(parent, args, context, info) {

      const fcs = await context.prisma.flightControllers()

      const count = await context.prisma
        .flightControllersConnection()
        .aggregate()
        .count()

      return {
        flightControllers: fcs,
        count
      }
    }
  },

  Mutation: {
    addFlightController(parent, args, context, info){
      const userId = getUserId(context)

      return context.prisma.createFlightController({
        postedBy: { connect: { id: userId } },
        ...args.flightController
      })
    },

    async deleteFlightController(parent, args, context, info){
      if(!args.id){
        throw new Error('You need to pass a valid productID')
      }

      const productFound = await context.prisma.flightController({ id: args.id })

      if (productFound) {
        let result = await context.prisma.deleteFlightController({ id: args.id })
        return productFound
      }else{
        throw new Error(`${args.id} not found.`)
      }
    },

    async updateFlightController(parent, args, context, info){
      const userId = getUserId(context)

      let existingFC = await context.prisma.flightController({ id: args.flightController.id })

      if(!existingFC){
        throw new Error('No such FC found by that ID')
      }

      let updatedFC = {
        ...existingFC,
        ...args.flightController,
        updatedBy: { connect: { id: userId } },
      };
      delete updatedFC.id; // Can't have ID
      delete updatedFC.updatedAt; // Can't have ID
      delete updatedFC.createdAt; // Can't have ID
      await context.prisma.updateFlightController({
        data: updatedFC,
        where: {id: existingFC.id}
      })

      return {...updatedFC, id: existingFC.id};
    }
  }
};

module.exports = resolver
