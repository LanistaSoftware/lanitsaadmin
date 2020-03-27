const mongoose = require('mongoose');

const sliderschema = mongoose.Schema({
  sliderName:{
    type:String,
    required:false
  },
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
  creationdate: {
    type: Date,
    default: new Date().toLocaleString()
  },
  active:{
    type:Boolean,
    required:false,
    default:false,
  }
});
const User = mongoose.model('Slider', sliderschema);

module.exports = User
