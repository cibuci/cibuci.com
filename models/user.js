const mongoose = require('../utils/db').mongoose;
const bcryptjs = require('bcryptjs');

const hash = bcryptjs.hash;
const compareSync = bcryptjs.compareSync;

const userSchema = mongoose.Schema({
  password: String,
  email: String
});

userSchema.pre('save', function (next) {
  let user = this;

  // Only hash & salt password field if it differs from the
  // one within the DB
  if (!user.isModified('password')) return next();

  // Auto-generates a salt and hash
  hash(this.password, 10, function (err, hash) {
    if (err) console.log(err);

    user.password = hash;
    next();
  });
});

userSchema.methods.tryPassword = function (candidate) {
  // Compare candidate password to the one in the DB
  return compareSync(candidate, this.password);
};

const model = mongoose.model('User', userSchema);
module.exports = model;
