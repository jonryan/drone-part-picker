const { APP_SECRET, getUserId } = require('../../utils.js')

const resolver = {

  Vote: {
    link(parent, args, context) {
      return context.prisma.vote({ id: parent.id }).link()
    },

    user(parent, args, context) {
      return context.prisma.vote({ id: parent.id }).user()
    },
  },

  Link: {
    postedBy(parent, args, context) {
      return context.prisma.link({ id: parent.id }).postedBy()
    },

    votes(parent, args, context) {
      return context.prisma.link({id: parent.id}).votes()
    },
  },

  Query: {
    async feed(parent, args, context, info) {
      const where = args.filter ? {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter },
        ],
      } : {}

      const links = await context.prisma.links({
        where,
        skip: args.skip,
        first: args.first,
        orderBy: args.orderBy
      })


      const count = await context.prisma
        .linksConnection({
          where,
        })
        .aggregate()
        .count()

      return {
        links,
        count,
      }
    }

  },

  Mutation: {
    async updateLink(parent, args, context, info) {
      const userId = getUserId(context)
      const existingLink = await context.prisma.link({ id: args.id })
      console.log('existingLink', existingLink);
      if (!existingLink) {
        throw new Error('No such link found by that ID')
      }
      let updatedLink = {...existingLink, ...args};
      console.log('updatedLink', updatedLink)

      context.prisma.updateLink({
        data: {
          url: args.url,
          description: args.description
        },
        where: {id: existingLink.id}
      }).then((data) =>{
        console.log('data', data);
        return updatedLink
      }).catch( (error) => {
        console.log('error', error);
      });

    },

    post(parent, args, context, info) {
      const userId = getUserId(context)
      return context.prisma.createLink({
        url: args.url,
        description: args.description,
        postedBy: { connect: { id: userId } },
      })
    }

  }

}

module.exports = resolver
