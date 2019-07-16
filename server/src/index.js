
const { GraphQLServer } = require('graphql-yoga')
const _ = require('lodash');
const { prisma } = require('./generated/prisma-client')

const allResolvers = require('./resolvers/resolver')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Subscription = require('./resolvers/Subscription')

const resolvers = _.merge({
  Query,
  Mutation,
  Subscription,
}, allResolvers)

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
