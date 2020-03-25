const getUserId = require('../utils/getUserId');

const hello = async (parent, args, { request }, info) => {
  const userId = await getUserId(request);
  return 'Secure User ID = ' + userId;
};

module.exports = hello;
