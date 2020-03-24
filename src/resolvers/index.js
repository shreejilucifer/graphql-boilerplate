const users = require('./queries/users');
const createuser = require('./mutations/createuser');

const Queries = {
  users
};

const Mutations = {
  createuser
};

module.exports = { Query: Queries, Mutation: Mutations };
