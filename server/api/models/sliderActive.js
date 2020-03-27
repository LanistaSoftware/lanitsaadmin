const mongoose = require('mongoose');

const activeschema = mongoose.Schema({
  sliderId:{
    type:mongoose.SchemaTypes.ObjectId,
    required:true,
    ref:'sliders'
  }
});
const Active = mongoose.model('Active', activeschema);

module.exports = Active