const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')

const resolvers = {
  Query: {
    info: () => `MovieRator API for Profiq GraphQL demo.`,
    movies: (root, args, context, info) => {
      return context.db.query.movies({}, info)
    },
    categories: (root, args, context, info) => {
      return context.db.query.categories({}, info)
    }
  },
  Mutation: {
    addCategory: (root, { name }, context, info) => {
      return context.db.mutation.createCategory({
        data: {
          name
        },
      }, info)
    },
    addMovie: (root, args, context, info) => {
      const { title, poster, year, country } = args

      return context.db.mutation.createMovie({
        data: {
          title, poster, year, country,
          claps: 0,
          category: { connect: { id: args.categoryId } }
        },
      }, info)
    },
    addClap: async (root, { movieId }, context, info) => {
      const movie = await context.db.query.movie({ where: { id: movieId } })
      return context.db.mutation.updateMovie({
        where: { id: movieId },
        data: { claps: movie.claps + 1 }
      }, info)
    }
  },
  Subscription: {
    updatedMovie: {
      subscribe: (parent, args, ctx, info) => {
        return ctx.db.subscription.movie(
          {}, info
        )
      }
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: '__PRISMA_ENDPOINT__',
      secret: 'mysecret123',
      debug: true,
    }),
  }),
})
server.start(() => console.log(`Server is running on http://localhost:4000`))