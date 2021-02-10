const mongoose = require('mongoose');

const accessoryShema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: {
        type: String,
        require: true,
    },
    imageUrl: {
        type: String,
        require: true,
        validate: /^https?/,
    },
    description: {
        type: String,
        require: true,
        maxlength: 50
    },
 
})
module.exports = mongoose.model('Accessory',accessoryShema)