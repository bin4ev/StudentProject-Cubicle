const bcrypt = require('bcrypt');
const jwt = require('JsonWebToken');
const { SALT_ROUND, SECRET } = require('../config/config');
const User = require('../models/user');


const register = async (username, password) => {

     let result = await User.find({ username });

    if (result[0]) {
      throw  {message:'User alredy exist!'} 
    }
    let salt = await bcrypt.genSalt(SALT_ROUND,);
    let hash = await bcrypt.hash(password, salt);
  
    let user = new User({ username, password: hash });
    return await user.save();





}

const login = async (username, password) => {

  let user = await User.findOne({ username });

  if (!user) {
    throw {message:'user not exist'} 
  }

  let itIsMatch = await bcrypt.compare(password, user.password);
  if (!itIsMatch) throw {message:'Password does not much!'} ;
  let token = jwt.sign({ _id: user._id, roles: ['admin'] }, SECRET);

  return token;

}

module.exports = {
  register,
  login,
}