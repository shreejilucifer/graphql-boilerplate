const { GraphQLServer, PubSub } = require('graphql-yoga');
const db = require('./src/db');
const resolvers = require('./src/resolvers');

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: './src/schema/schema.graphql',
  resolvers: resolvers,
  context: request => {
    return {
      db,
      pubsub,
      request
    };
  }
});

const options = {
  port: process.env.PORT ? 80 : 4000,
  endpoint: '/graphql',
  playground: '/'
};

server.start(options, ({ port }) => {
  console.log(`The Server is Happy and Running: ${port} 🏃🏻‍♂`);
});
