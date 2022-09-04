const mongoose = require('mongoose');

//User schema
let userSchema = new mongoose.Schema({
    _id: {
        type: Number
    },
    name:{
      type: String,
      required: true
    },
    email:{
      type: String,
      required: true
    },
    password:{
      type: String,
      required: true
    }
});

module.exports = mongoose.model('user',userSchema);
