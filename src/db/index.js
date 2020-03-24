const mongoose = require('mongoose');
const config = require('config');

const DBURL = config.get('DBURL');

mongoose.connect(
  DBURL,
  {
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    if (err) {
      console.log('Error Connecting Database 😢');
      console.error(err);
      process.exit(1);
    }
    console.log('Database is Happy 😇');
  }
);

module.exports = mongoose;
