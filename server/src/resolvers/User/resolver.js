const { APP_SECRET, getUserId } = require('../../utils.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const resolver = {

  User: {
    links(parent, args, context) {
      return context.prisma.user({ id: parent.id }).links()
    },

    flightControllers(parent, args, context) {
      return context.prisma.user({ id: parent.id }).flightControllers()
    },

    editedFlightControllers(parent, args, context) {
      return context.prisma.user({ id: parent.id }).editedFlightControllers()
    },

    addedMerchants(parent, args, context) {
      return context.prisma.user({id: parent.id}).addedMerchants()
    },
    editedMerchants(parent, args, context) {
      return context.prisma.user({id: parent.id}).editedMerchants()
    },
  },

  Query: {
    async userList(parent, args, context, info){

      let users = context.prisma.users()
      console.log('userList', users);
      return {users}
    }
  },
  Mutation: {
    async login(parent, args, context, info) {
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
    },

    async signup(parent, args, context, info) {
      const password = await bcrypt.hash(args.password, 10)
      const user = await context.prisma.createUser({ ...args, password })

      const token = jwt.sign({ userId: user.id }, APP_SECRET)

      return {
        token,
        user,
      }
    }
  }
}

module.exports = resolver
