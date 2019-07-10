const { APP_SECRET, getUserId } = require('../../utils.js')

const resolver = {
  FlightControllerMerchantLink: {
    postedBy(parent, args, context) {
      return context.prisma.flightControllerMerchantLink({ id: parent.id }).postedBy()
    },
    merchant(parent, args, context) {
      return context.prisma.flightControllerMerchantLink({ id: parent.id }).merchant()
    },
    flightController(parent, args, context) {
      return context.prisma.flightControllerMerchantLink({ id: parent.id }).flightController()
    }
  },
  Query: {

  },
  Mutation: {
    async deleteFlightControllerMerchantLink(parent, args, context, info){
      if(!args.id){
        throw new Error('You need to pass a valid link id')
      }

      const linkFound = await context.prisma.flightControllerMerchantLink({id: args.id})

      if(linkFound){
        await context.prisma.deleteFlightControllerMerchantLink({id: args.id})

      }else{
        throw new Error('You need to pass a valid link id')
      }

      return linkFound
    },
    async addFlightControllerMerchantLink(parent, args, context, info){
      const userId = getUserId(context)

      if(args.flightControllerMerchantLink.id){
        // EDIT EXISTING
        const productFound = await context.prisma.flightControllerMerchantLink({ id: args.flightControllerMerchantLink.id })
        if (productFound) {
          return context.prisma.updateFlightControllerMerchantLink({
            data: {
              url: args.flightControllerMerchantLink.url,
              price: args.flightControllerMerchantLink.price,
              inStock: args.flightControllerMerchantLink.inStock,
              postedBy: { connect: { id: userId } },
              flightController: { connect: { id: args.flightControllerMerchantLink.flightControllerId } },
              merchant: { connect: { id: args.flightControllerMerchantLink.merchantId } },
            },
            where: {id: args.flightControllerMerchantLink.id}
          })
        }else{
          throw new Error(`FlightControllerMerchant ${args.id} not found.`)
        }

      }else{
        // ADD NEW
        return context.prisma.createFlightControllerMerchantLink({
          url: args.flightControllerMerchantLink.url,
          price: args.flightControllerMerchantLink.price,
          inStock: args.flightControllerMerchantLink.inStock,
          postedBy: { connect: { id: userId } },
          flightController: { connect: { id: args.flightControllerMerchantLink.flightControllerId } },
          merchant: { connect: { id: args.flightControllerMerchantLink.merchantId } },
        })
      }
    }
  }
}

module.exports = resolver
