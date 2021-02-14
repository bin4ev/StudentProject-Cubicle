const validator = require('validator')

const iStrongPasswordMidware = (req, res, next) => {
    let password = req.body.password
    let strongPassword = validator.isStrongPassword(password, [{
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    }])
    if (!strongPassword) {
        return res.render('registerPage', {
            error:
            {
                message:
                    'Your Pasword should be strong : minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1!!'

            }, username: req.body.username
        });
    }
    next()
}

module.exports = iStrongPasswordMidware