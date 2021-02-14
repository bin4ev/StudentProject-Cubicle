const mongoose = require('mongoose');
const ENGLISH_LETTERS_PATERN = /^[a-zA-z0-9]+$/

const  userSchema = new mongoose.Schema({
id: mongoose.Types.ObjectId,
username:{
    type:String,
    required: [true, 'Username is required !'],
    minLength:3,
    match: ENGLISH_LETTERS_PATERN ,
  

},
password:{
    type: String,
    required: [true, 'Password is required !'],
    minLength:6,

}


})
module.exports = mongoose.model('User',userSchema)