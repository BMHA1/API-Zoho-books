
const GenerateToken = require('../Middleware/GenerateToken')
const decode = require('../Helpers/decodeToken')

module.exports.renewToken = async (req, res, next) => {
  
    let objectUser = decode.decodeToken(req.headers.token)
    let fecha = Date.now() - objectUser.iat
    try {
        if (fecha < 3599999) {
            next()
        } else {
            console.log('soy mayor')
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
