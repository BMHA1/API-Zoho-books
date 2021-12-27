
const jwt = require("jsonwebtoken");
const APIconsumer = require('../Apiconsumer/ApiCustomers')
const GenerateToken = require('../Middleware/GenerateToken')




module.exports.renewToken = async (req, res, next) => {
    let objectUser = jwt.decode(req.headers.token)
    console.log(objectUser.iat)
    // console.log(new Date())
    let fecha = Date.now() - objectUser.iat
    try {
        if (fecha < 3599999) {
            next()
        } else {
            await GenerateToken.compareHash(objectUser.refresh_token, objectUser.client_id, objectUser.client_secret)
            next()
        }
    } catch (error) {
        res.json({
            message: 'La Token no se ha  podido actualizar',
            errors: error,
            status: 400
        })
    }
}
