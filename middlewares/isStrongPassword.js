const validator = require('validator')

const iStrongPasswordMidware = (req, res, next) => {
    let password = req.body.password
    let strongPassword = validator.isStrongPassword(password, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    })
    if (!strongPassword) {
        return res.render('registerPage', { error: { message: 'You should have strong password' }});
    }
    next()
}

module.exports = iStrongPasswordMidware