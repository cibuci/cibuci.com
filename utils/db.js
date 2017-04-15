const mongoose = require('mongoose');

const dbHost = process.env.DB_HOST || 'localhost';
const dbName = process.env.DB_NAME || 'cibuci';

// Connect to DB using the credentials set in the ".env" file
mongoose.connect('mongodb://' + dbHost + '/' + dbName, {
  user: process.env.DB_USER,
  pass: process.env.DB_PASSWORD
});

mongoose.Promise = require('es6-promise').Promise;

const db = mongoose.connection;

db.on('error', function (info) {
  if (info.message.includes('ECONNREFUSED')) {
    info.message = 'Please make sure it\'s running and accessible!'
  }

  console.log('Couldn\'t connect to DB: ' + info.message)
  process.exit(1);
});

db.once('open', function() {
  console.log('Mongo connected!');
});

process.on('SIGINT', function() {
  db.close(function() {
    process.exit(0);
  });
});

module.exports.db = db;
module.exports.mongoose = mongoose;
