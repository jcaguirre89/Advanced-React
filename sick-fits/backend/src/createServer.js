const { GraphQLServer } = require('graphql-yoga');

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const db = require('./db');

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Query,
      Mutation
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    //Add db to request in context
    context: req => ({ ...req, db })
  })
}


module.exports = createServer;
