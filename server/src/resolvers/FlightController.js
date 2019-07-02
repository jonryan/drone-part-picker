function postedBy(parent, args, context) {
  return context.prisma.flightController({ id: parent.id }).postedBy()
}

function updatedBy(parent, args, context) {
  return context.prisma.flightController({ id: parent.id }).updatedBy()
}


module.exports = {
  postedBy,
  updatedBy,
}
