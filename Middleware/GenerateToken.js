const jwtr = require("jsonwebtoken");
const APIconsumer = require('../Apiconsumer/ApiCustomers')



module.exports.generateToken = async (userToken) => {
    try {
        let refuserToken = await APIconsumer.refreshToken(userToken.refresh_token, userToken.client_id, userToken.client_secret)// generamos el tokenRefresh, con el primero
        const payload = {
            email: userToken.email,
            refreshToken: userToken.refresh_token,
            token: refuserToken.access_token,
            iat: Date.now()
        }
        return jwtr.sign(payload, process.env.TOKEN)
    } catch (error) {
        console.log(error)
    }
}