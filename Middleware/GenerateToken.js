const jwtr = require("jsonwebtoken");
const APIconsumer = require('../Apiconsumer/ApiCustomers')



module.exports.generateToken = async (userToken) => {
    console.log(userToken)
    try {
        let refuserToken = await APIconsumer.refreshToken(userToken.refresh_token, userToken.client_id, userToken.client_secret)// generamos el tokenRefresh, con el primero
        const payload = {
            ID_usuario: userToken.ID_usuario,
            email: userToken.email,
            refreshToken: userToken.refresh_token, //No vence, se utiliza para refrescar el token cada 3600 seg
            token: refuserToken.access_token, // Token que utilizaremos para llamar a todos los endpoints en zoho books
            iat: Date.now()
        }
        return jwtr.sign(payload, process.env.TOKEN)
    } catch (error) {
        console.log(error)
    }
}