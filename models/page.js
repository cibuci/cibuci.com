const mongoose = require('../utils/db').mongoose;

const pageSchema = mongoose.Schema({
  title: String,
  author: String,
  dates: {
    created: Date,
    updated: Date
  },
  content: String,
  slug: {
    type: String,
    lowercase: true
  }
  // content: [contentSchema]
})

pageSchema.set('toObject', { virtuals: true });

const model = mongoose.model('Page', pageSchema);
module.exports = model;
