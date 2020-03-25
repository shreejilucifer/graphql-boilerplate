const jwt = require('jsonwebtoken');
const config = require('config');

const getUserId = async request => {
  const headers = request.request.headers.authorization;

  if (!headers) throw new Error('You are Not Authorized');

  const decoded = await jwt.verify(headers, config.get('APPSECRET'));

  return decoded.userId;
};

module.exports = getUserId;
