function postedBy(parent, args, context) {
  return context.prisma.merchant({ id: parent.id }).postedBy()
}

function updatedBy(parent, args, context) {
  return context.prisma.merchant({ id: parent.id }).updatedBy()
}

function flightControllers(parent, args, context) {
  return context.prisma.merchant({ id: parent.id }).flightControllers()
}



module.exports = {
  postedBy,
  updatedBy,
  flightControllers,
}
