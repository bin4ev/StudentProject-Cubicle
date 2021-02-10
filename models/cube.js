
const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
        maxlength: 50
    },
    imageUrl: {
        type: String,
        require: true,
        validate: /^https?/,
    },
    difficultyLevel:{
        type: Number,
        require: true,
        min:1,
        max:10
    },
    accessories:[{
        type: mongoose.Types.ObjectId,
        ref:'Accessory'
    }],
    creatorId:{
        type: mongoose.Types.ObjectId,
        ref:'User',
        type: String,
        require: true,
    }

})
cubeSchema.query.byName = function(name) {
    return this.where({ name: new RegExp(name, 'i') })
  };

module.exports = mongoose.model('Cube',cubeSchema)