const mongoose = require('mongoose');

let imageSchema = new mongoose.Schema({
    imagename: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('image',imageSchema);