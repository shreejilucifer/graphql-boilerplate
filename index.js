const { GraphQLServer, PubSub } = require('graphql-yoga');
const db = require('./src/db');
const resolvers = require('./src/resolvers');

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: './src/schema/schema.graphql',
  resolvers: resolvers,
  context: {
    db,
    pubsub
  }
});

server.start(() => {
  console.log('The Server is Happy and Running: 🏃🏻‍♂️');
});
