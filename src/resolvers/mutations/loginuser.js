const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const Users = require('../../db/models/user');

const loginuser = async (parent, args, ctx, info) => {
  const { email, password } = args.data;

  const userExists = await Users.findOne({ email: email });

  if (!userExists) throw new Error('User Does Not Exists');

  const passwordMatch = await bcrypt.compare(password, userExists.password);

  if (!passwordMatch) throw new Error('Invalid Password');

  const token = await jwt.sign(
    { userId: userExists.id },
    config.get('APPSECRET')
  );

  return { user: userExists, token };
};

module.exports = loginuser;
