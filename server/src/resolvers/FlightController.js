function postedBy(parent, args, context) {
  return context.prisma.flightController({ id: parent.id }).postedBy()
}

function updatedBy(parent, args, context) {
  return context.prisma.flightController({ id: parent.id }).updatedBy()
}

function merchantLinks(parent, args, context) {
  return context.prisma.flightController({ id: parent.id }).merchantLinks()
}


module.exports = {
  postedBy,
  updatedBy,
  merchantLinks
}
