
const GenerateToken = require('../Middleware/GenerateToken')
const decode = require('../Middleware/decodeToken')

module.exports.renewToken = async (req, res, next) => {
    let objectUser = decode.decodeToken(req.headers.token)
    console.log(objectUser.iat)
    let fecha = Date.now() - objectUser.iat
    try {
        if (fecha < 3599999) {
            next()
        } else {
            await GenerateToken.generateToken(objectUser)
            next()
        }
    } catch (error) {
        res.json({
            message: 'El Token no se ha  podido actualizar',
            errors: error,
            status: 400
        })
    }
}
