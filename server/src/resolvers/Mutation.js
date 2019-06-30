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

async function updateFlightController(parent, args, context, info){
  const userId = getUserId(context)

  console.log('args', args.id, args);
  existingFC = await context.prisma.flightController({ id: args.flightController.id })
  console.log('existingFC', existingFC);

  if(!existingFC){
    throw new Error('No such FC found by that ID')
  }

  let updatedFC = {...existingFC, ...args.flightController};
  // updatedFC.releaseDate = '2005-05-05T04:00:00.000Z'
  delete updatedFC.releaseDate;
  console.log('updatedFC', updatedFC)

  await context.prisma.updateFlightController({data:updatedFC})

  return updatedFC
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