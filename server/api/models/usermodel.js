const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR  = 10;
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
  Password: {
    type: String,
    required: true,
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
userschema.pre('save', function(next) {
  var user = this;
  console.log(user)
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('Password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);

      // hash the password using our new salt
      bcrypt.hash(user.Password, salt, function(err, hash) {
          if (err) return next(err);

          // override the cleartext password with the hashed one
          user.Password = hash;
          next();
      });
  });
});
userschema.pre('updateOne', function(next) {
  var user = this._update.$set;
  console.log(user)
  console.log('query criteria',this.getQuery());
  console.log(this._conditions);
  // only hash the password if it has been modified (or is new)
  

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);

      // hash the password using our new salt
      bcrypt.hash(user.Password, salt, function(err, hash) {
          if (err) return next(err);

          // override the cleartext password with the hashed one
          user.Password = hash;
          console.log(user.Password)
          next();
      });
  });
});
const User = mongoose.model('User', userschema);

module.exports = User
