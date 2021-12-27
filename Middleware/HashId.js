const jwtr = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const APIconsumer = require('../Apiconsumer/ApiCustomers')
const generateToken = require('../Middleware/GenerateToken')

module.exports.createHash = (password) => {
    let encrypted = bcrypt.hashSync(password, 10)
    return encrypted
}

module.exports.compareHash = async (reqbody, companyBBDD) => {
    try {
        let compare = bcrypt.compareSync(reqbody.ID_usuario, companyBBDD.ID_usuario)
        if (compare) {
            let refreshToken = await generateToken.generateToken(companyBBDD.refresh_token, companyBBDD.client_id, companyBBDD.client_secret)// generamos el tokenRefresh, con el primero
            return refreshToken
        }
    } catch (error) {
        console.log(error)
    }
}




module.exports.verificarToken = (req, res, next) => {
    try {
        const token = req.headers.token
        jwtr.verify(token, process.env.TOKEN)
        next()
    } catch (error) {
        console.log(error)
    }
}