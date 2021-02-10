const { Router } = require('express');
const router = Router();
const accessoryService = require('../services/accessoryService')
const productService = require('../services/productService')
const validation= require('../helper/validation')

router.get('/create', (req, res) => {

    res.render('createAccessory', { title: 'create' })
})

router.post('/create', (req, res) => {
  
    if(!validation(req.body)){
        res.render('createAccessory',{error:{message:'You need to fill all fields'}})
        return
        
    }
    accessoryService.create(req.body)
        .then(() => res.redirect(302, '/'))
        .catch((err) => console.log(err))
})

router.get('/attach/:id', async (req,res)=>{
  
    let cube = await productService.getOne(req.params.id)
    let accessories = await accessoryService.getAll()
   
    res.render('attachAccessory', { title: 'attach',cube ,accessories})
})

router.post('/attach/:id', (req,res)=>{
 accessoryService.attachAccessory(req.params.id,req.body.accessory)
 res.redirect(302,`/details/${req.params.id}`)

})


    
   
   
   


module.exports = router