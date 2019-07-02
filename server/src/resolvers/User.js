function links(parent, args, context) {
  return context.prisma.user({ id: parent.id }).links()
}

function flightControllers(parent, args, context) {
  return context.prisma.user({ id: parent.id }).flightControllers()
}

function addedMerchants(parent, args, context) {
  return context.prisma.user({id: parent.id}).addedMerchants()
}
function editedMerchants(parent, args, context) {
  return context.prisma.user({id: parent.id}).editedMerchants()
}

module.exports = {
  links,
  flightControllers,
  addedMerchants,
  editedMerchants
}
