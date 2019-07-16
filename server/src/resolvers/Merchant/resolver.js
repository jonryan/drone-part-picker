const { APP_SECRET, getUserId } = require('../../utils.js')

const resolver = {
  Merchant: {
    postedBy(parent, args, context) {
      return context.prisma.merchant({ id: parent.id }).postedBy()
    },

    updatedBy(parent, args, context) {
      return context.prisma.merchant({ id: parent.id }).updatedBy()
    },

    flightControllers(parent, args, context) {
      return context.prisma.merchant({ id: parent.id }).flightControllers()
    }
  },

  Query: {
    async getMerchant(parent, args, context, info){
      const merchantFound = await context.prisma.merchant({ id: args.id })
      if(!merchantFound){
        throw new Error(`Flight Controller by ID ${args.id} not found.`)
      }else{
        return merchantFound
      }
    },
    async merchantList(parent, args, context, info){
      let merchants = context.prisma.merchants()
      console.log('merchants', merchants);
      return {merchants}
    },
  },

  Mutation: {
    addMerchant(parent, args, context, info){
      const userId = getUserId(context)

      return context.prisma.createMerchant({
        postedBy: { connect: { id: userId } },
        ...args.merchant
      })
    },
    async deleteMerchant(parent, args, context, info){
      if(!args.id){
        throw new Error('You need to pass a valid merchant id')
      }

      const merchantFound = await context.prisma.merchant({id: args.id})

      if(merchantFound){
        await context.prisma.deleteMerchant({id: args.id})
      }else{
        throw new Error('You need to pass a valid merchant id')
      }

      return merchantFound
    },
    async updateMerchant(parent, args, context, info){
      const userId = getUserId(context)

      let existingMerchant = await context.prisma.merchant({ id: args.merchant.id })

      if(!existingMerchant){
        throw new Error('No such Merchant found by that ID')
      }

      let updatedMerchant = {
        ...existingMerchant,
        ...args.merchant,
        updatedBy: { connect: { id: userId } },
      };
      delete updatedMerchant.id; // Can't have ID
      delete updatedMerchant.createdAt; // Can't have ID
      delete updatedMerchant.updatedAt; // Can't have ID
      await context.prisma.updateMerchant({
        data: updatedMerchant,
        where: {id: existingMerchant.id}
      })

      return {...updatedMerchant, id: existingMerchant.id};
    }
  }


}

module.exports = resolver
