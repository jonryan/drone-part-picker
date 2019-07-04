const { GraphQLServer } = require('graphql-yoga')
const _ = require('underscore')
const { prisma } = require('./generated/prisma-client')


const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')
const Subscription = require('./resolvers/Subscription')
const Vote = require('./resolvers/Vote')
const FlightController = require('./resolvers/FlightController')
const Merchant = require('./resolvers/Merchant')
const FlightControllerMerchantLink = require('./resolvers/FlightControllerMerchantLink')

const resolvers = {
  Query,
  Mutation,
  User,
  Link,
  Subscription,
  Vote,
  FlightController,
  Merchant,
  FlightControllerMerchantLink,
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
