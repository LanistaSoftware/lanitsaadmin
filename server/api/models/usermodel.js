const mongoose = require('mongoose');

const userschema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
    max:120,
    min:2,
    trim:true
    
  },
  LastName: {
    type: String,
    required: true,
    max:120,
    min:2,
    trim:true
  },
  email: {
    type: String,
    required: true,
    trim:true
  },
  Phone: {
    type: Number,
    required: true,
    trim:true
    
  },
  isAdmin:{
      type:Number,
      required:true
  },
  creationdate: {
    type: Date,
    default: new Date().toLocaleDateString()
  },
});
const User = mongoose.model('User', userschema);

module.exports = User
