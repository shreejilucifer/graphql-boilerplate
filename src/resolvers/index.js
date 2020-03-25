const users = require('./queries/users');
const hello = require('./queries/hello');

const createuser = require('./mutations/createuser');
const loginuser = require('./mutations/loginuser');
const counter = require('./subscriptions/counter');

const Queries = {
  users,
  hello
};

const Mutations = {
  createuser,
  loginuser
};

const Subscriptions = {
  counter: {
    subscribe: counter
  }
};

module.exports = {
  Query: Queries,
  Mutation: Mutations,
  Subscription: Subscriptions
};
