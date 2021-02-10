module.exports = (req, res, next) => {
    if (req.user) {
        return res.redirect(302,'/')
    }
    next()
}