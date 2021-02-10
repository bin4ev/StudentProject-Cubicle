
const Cube = require('../models/cube')

function getAll(query) {
    let products = Cube.find()

    if (query.from) {
       
        products = Cube.where('difficultyLevel').gte(query.from)
        
    }
      if (query.search) {

      products = Cube.find().byName(`${query.search}`)

    } 
    if (query.to) {
             products = Cube.where('difficultyLevel').lte(query.to)
    } 

    return products
}

function create(data,userId) {

    let cube = new Cube({...data,creatorId:userId})

    return cube.save()

}


function getOne(id) {

    return Cube.findById(id).lean()
}

function getOneWithAccessory(id) {
    return Cube.findById(id)
        .populate('accessories').lean()
}
function update(id,params) {
 
   return Cube.findByIdAndUpdate(id,params)
        
    }

function deleteProduct(id) {
        
       return Cube.findOneAndRemove(id)
            
        }


module.exports = {
    getOneWithAccessory,
    create,
    getAll,
    getOne,
    update,
    deleteProduct,
}