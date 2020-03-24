const bcrypt = require('bcrypt');
const Users = require('../../db/models/user');

const createuser = async (parent, args, ctx, info) => {
  const { name, email, password, age } = args.data;

  const emailTaken = await Users.findOne({ email: email });

  if (emailTaken) throw new Error('Email is Already Taken');

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new Users({
    name: name,
    email: email,
    password: hashedPassword,
    age: age
  });

  await user.save();

  return user;
};

module.exports = createuser;
