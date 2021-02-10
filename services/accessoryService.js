const Accessory = require('../models/accessory')
const Cube = require('../models/cube')

function create(data) {

    let accesory = new Accessory(data)
    return accesory.save()
}


function getAll() {
    return Accessory.find({}).lean()
}

async function attachAccessory (productId, accessoryId) {
    let product = await Cube.findById(productId)
    let accessory = await Accessory.findById(accessoryId)

    product.accessories.push(accessory)
    return product.save()
}


module.exports = {
    attachAccessory,
    create,
    getAll,
    

}