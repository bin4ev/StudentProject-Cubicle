const jwt = require('jsonwebtoken')
const {COOCKIE_NAME,SECRET} = require('../config/config')

module.exports=function () {
return (req,res,next)=>{
let token = req.cookies[COOCKIE_NAME]
if(token){
    jwt.verify(token,SECRET,(err,decoded)=>{
        if(err){
            res.clearCookie(COOCKIE_NAME)
        }else{
            req.user=decoded;
            res.locals.user= decoded;
            res.locals.isAuthentication = true
        }
    })
}
next()
}
    
}