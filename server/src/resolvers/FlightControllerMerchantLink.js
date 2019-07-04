function postedBy(parent, args, context) {
  return context.prisma.flightControllerMerchantLink({ id: parent.id }).postedBy()
}

function merchant(parent, args, context) {
  return context.prisma.flightControllerMerchantLink({ id: parent.id }).merchant()
}
function flightController(parent, args, context) {
  return context.prisma.flightControllerMerchantLink({ id: parent.id }).flightController()
}


module.exports = {
  postedBy,
  merchant,
  flightController,
}
