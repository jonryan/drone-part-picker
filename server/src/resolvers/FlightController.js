function postedBy(parent, args, context) {
  return context.prisma.flightController({ id: parent.id }).postedBy()
}


module.exports = {
  postedBy,
}
