function links(parent, args, context) {
  return context.prisma.user({ id: parent.id }).links()
}

function flightControllers(parent, args, context) {
  return context.prisma.user({ id: parent.id }).flightControllers()
}

function addedMerchants(parent, args, context) {
  return context.prisma.user({id: parent.id}).addedMerchants()
}

module.exports = {
  links,
  flightControllers,
  addedMerchants,
}
