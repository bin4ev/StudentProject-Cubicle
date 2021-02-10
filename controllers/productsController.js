const { Router } = require('express');
const router = Router();
const productService = require('../services/productService');
const validation = require('../helper/validation')
const isAuthentication = require('../middlewares/authentication')


router.get('/',async (req, res) => {
    let query = req.query
    let products = await productService.getAll(query).lean()
    res.render('home', { title: 'home', products ,})
})

router.get('/create', isAuthentication,(req, res) => {
    res.render('create', { title: 'create' })
})

router.post('/create',isAuthentication,(req, res) => {
   
   if(!validation(req.body)){
       res.render('create',{error:{message:'You need to fill all fields'}})
       return
       
   }
    productService.create(req.body,req.user._id)
        .then((data) =>res.redirect(302, '/'))
        .catch(() => res.status(404).end)

})

router.get('/details/:id',  (req, res) => {
    
     productService.getOneWithAccessory(req.params.id)
     .then(cube=>{
        
        if(req.user){
            if(cube.creatorId===req.user._id){
                let isMatch = true
             res.render('details', { title: 'details', cube ,isMatch})
             return
            }
          }
          res.render('details', { title: 'details', cube})
     }).catch(err=>console.log(err))


  
    
})
router.get('/edit/:id',isAuthentication, (req,res)=>{
    productService.getOne(req.params.id)
    .then((cube)=>{
         res.render('editCubePage',cube)
    })
    .catch(err=>console.log(err))

})
router.post('/edit/:id',isAuthentication, (req,res)=>{
 productService.update(req.params.id,req.body)
 .then(response=>{
    res.redirect(302,`/details/${req.params.id}`) 
 })
 .catch(err=>console.log(err))

})

router.get('/delete/:id',isAuthentication, (req,res)=>{
    productService.getOne(req.params.id,)
    .then(cube=>{
       res.render('deleteCubePage',cube) 
    })
    .catch(err=>console.log(err))
   
   })

router.post('/delete/:id',isAuthentication, (req,res)=>{
    productService.deleteProduct(req.params.id,)
    .then(response=>{
       res.redirect(302,`/`) 
    })
    .catch(err=>console.log(err))
   
   })

module.exports = router