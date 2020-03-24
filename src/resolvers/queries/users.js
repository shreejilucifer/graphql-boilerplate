const Users = require('../../db/models/user');

const users = async (parent, args, ctx, info) => {
  return await Users.find();
};

module.exports = users;
