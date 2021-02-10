const { Router } = require('express');
const router = Router();
const userService = require('../services/userService')
const {COOCKIE_NAME}= require('../config/config')

const isStrongPasswordMidleware = require('../middlewares/isStrongPassword')
const isGues = require('../middlewares/isGues');
const isAuthentication = require('../middlewares/authentication')

router.get('/register',isGues, (req, res) => {
    res.render('registerPage')

})
router.post('/register',isGues,isStrongPasswordMidleware,async (req, res) => {
  const {username , password,repeatPassword}= req.body
 
    if (password !== repeatPassword) {
      
            res.render('registerPage',{message:'Password mismatch!'})
            return
    }

    try {

        let user = await userService.register(username,password)
      
        if(user){
            res.redirect(302, '/user/login')
        } 
    

    } catch (error) {
        
         res.render('registerPage',{error}) 
    }


})


router.get('/login',isGues, (req, res) => {
    res.render('loginPage')

})
router.post('/login',isGues,async (req, res) => {

    const {username,password}= req.body

    try {
        let token = await userService.login(username,password)
        res.cookie(COOCKIE_NAME,token)
        res.redirect('/')

    } catch (error) {
        console.log(error);
        res.render('loginPage', {error}) 
    }
    

})
router.get('/logout',isAuthentication, (req, res) => {
  console.log(req.cookies);  
    res.clearCookie(COOCKIE_NAME)
    res.redirect('/')

})






module.exports = router;