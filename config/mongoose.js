const mongoose = require('mongoose');
const config = require('./config')
module.exports = ()=>{
    mongoose.connect(config.DB_CONNEECTION, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    const db = mongoose.connection;
    db.on('error',console.error.bind(console,'connection erroer'));
    db.once('open', function() {
        console.log( 'we are connected!');
      });
    
}
