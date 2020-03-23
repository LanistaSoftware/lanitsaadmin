const mongoose = require('mongoose');

const sliderschema = mongoose.Schema({
  SliderOne: {
   type:Object,
   required:true
  },
  SliderTwo: {
   type:Object,
   required:true
  },
  SliderThree: {
   type:Object,
   required:true
  },
  Selected:{
      type:Boolean,
      required:false
  },
  creationdate: {
    type: Date,
    default: new Date().toLocaleDateString()
  },
});
const User = mongoose.model('Slider', sliderschema);

module.exports = User
