const Users = require('../../db/models/user');

const createuser = async (parent, args, ctx, info) => {
  const { name, email, age } = args.data;

  const emailTaken = await Users.findOne({ email: email });

  if (emailTaken) throw new Error('Email is Already Taken');

  const user = new Users({
    name: name,
    email: email,
    age: age
  });

  await user.save();

  return user;
};

module.exports = createuser;
