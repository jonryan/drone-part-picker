const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')


async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10)
  const user = await context.prisma.createUser({ ...args, password })

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

async function login(parent, args, context, info) {
  const user = await context.prisma.user({ email: args.email })
  if (!user) {
    throw new Error('No such user found')
  }

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

function post(parent, args, context, info) {
  const userId = getUserId(context)
  return context.prisma.createLink({
    url: args.url,
    description: args.description,
    postedBy: { connect: { id: userId } },
  })
}



async function deleteFlightController(parent, args, context, info){
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
}

function addFlightController(parent, args, context, info){
  const userId = getUserId(context)

  return context.prisma.createFlightController({
    postedBy: { connect: { id: userId } },
    ...args.flightController
  })
}

async function addFlightControllerMerchantLink(parent, args, context, info){
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

function addMerchant(parent, args, context, info){
  const userId = getUserId(context)

  return context.prisma.createMerchant({
    postedBy: { connect: { id: userId } },
    ...args.merchant
  })
}

async function deleteFlightControllerMerchantLink(parent, args, context, info){
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
}

async function updateMerchant(parent, args, context, info){
  console.log('updateMerchant');
  const userId = getUserId(context)

  console.log('updateMerchant', userId);
  let existingMerchant = await context.prisma.merchant({ id: args.merchant.id })
  console.log('existingMerchant', existingMerchant)

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
  console.log("Trying to save", updatedMerchant)
  await context.prisma.updateMerchant({
    data: updatedMerchant,
    where: {id: existingMerchant.id}
  })

  return {...updatedMerchant, id: existingMerchant.id};
}

async function updateFlightController(parent, args, context, info){
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

async function updateLink(parent, args, context, info) {
  const userId = getUserId(context)
  const existingLink = await context.prisma.link({ id: args.id })
  if (!existingLink) {
    throw new Error('No such link found by that ID')
  }
  let updatedLink = {...existingLink, ...args};

  return context.prisma.updateLink(updatedLink)
}

async function vote(parent, args, context, info) {
  const userId = getUserId(context)

  const linkExists = await context.prisma.$exists.vote({
    user: { id: userId },
    link: { id: args.linkId },
  })
  if (linkExists) {
    throw new Error(`Already voted for link: ${args.linkId}`)
  }

  return context.prisma.createVote({
    user: { connect: { id: userId } },
    link: { connect: { id: args.linkId } },
  })
}



module.exports = {
  signup,
  login,
  post,
  updateLink,
  vote,
  addFlightController,
  updateFlightController,
  deleteFlightController,
  addMerchant,
  updateMerchant,
  addFlightControllerMerchantLink,
  deleteFlightControllerMerchantLink,
}

// Mutation: {

  //   updateLink: (parent, {id, url, description}) => {
  //     let found = _.findWhere(links, {id});
  //     if(found){
  //       found.url = url;
  //       found.description = description;
  //       return found
  //     }
  //   },
  //   deleteLink: (parent, {id}) => {
  //     links = _.reject(links, (link)=> link.id===id)
  //   }
  // }
