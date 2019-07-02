 function postedBy(parent, args, context) {
  return context.prisma.merchant({ id: parent.id }).postedBy()
}

module.exports = {
  postedBy,
}
