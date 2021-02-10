
const { Router } = require('express');

const productController = require('./controllers/productsController');
const accessoryController = require('./controllers/accessoryController');
const aboutController = require('./controllers/aboutController');
const userController = require('./controllers/userController');

const isAuthentication = require('./middlewares/authentication')

const router = Router();

router.use('/', productController);
router.use('/user', userController);
router.use('/about',aboutController)
router.use('/accessory',isAuthentication, accessoryController)
router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router;