const mongoose = require('mongoose');

const blogschema = mongoose.Schema({
  user: {
    type: String,
    required: true
    
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  publishdate: {
    type: Date,
    required: false
  },
  date: {
    type: Date,
    default: new Date()
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId
  }
});
const Blog = mongoose.model('Blog', blogschema);

module.exports = Blog
