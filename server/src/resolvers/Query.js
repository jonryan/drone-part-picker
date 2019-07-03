async function feed(parent, args, context, info) {
  const where = args.filter ? {
    OR: [
      { description_contains: args.filter },
      { url_contains: args.filter },
    ],
  } : {}

  const links = await context.prisma.links({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  })


  const count = await context.prisma
    .linksConnection({
      where,
    })
    .aggregate()
    .count()

  return {
    links,
    count,
  }
}

async function flightControllerFeed(parent, args, context, info) {

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

async function getFlightController(parent, args, context, info){
  const productFound = await context.prisma.flightController({ id: args.id })
  if(!productFound){
    throw new Error(`Flight Controller by ID ${args.id} not found.`)
  }else{
    return productFound
  }
}

async function getMerchant(parent, args, context, info){
  const merchantFound = await context.prisma.merchant({ id: args.id })
  if(!merchantFound){
    throw new Error(`Flight Controller by ID ${args.id} not found.`)
  }else{
    return merchantFound
  }
}

async function merchantList(parent, args, context, info){

  /*
  query{
    merchantList{
      merchants {
        id
        name
        postedBy{
          id,
          name
        }
        affiliateId
        url
        disabled
      }
    }
  }
   */

  let merchants = context.prisma.merchants()
  console.log('merchants', merchants);
  return {merchants}
}

async function userList(parent, args, context, info){
  let users = context.prisma.users()
  return {users}
}

function info(){
  return 'A clone of Hackernews'
}

// link: (parent, args) => {
//   let linkFound;
//   _.each(links, (link) => {
//     if(link.id === args.id){
//       linkFound = link;
//     }
//   })
//   return (linkFound) ? linkFound : {}
// }

module.exports = {
  feed,
  info,
  flightControllerFeed,
  getFlightController,
  userList,
  merchantList,
  getMerchant,
}
