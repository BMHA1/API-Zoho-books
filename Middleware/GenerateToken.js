const jwtr = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const APIconsumer = require('../Apiconsumer/ApiCustomers')



module.exports.generateToken = async (refresh_token, client_id, client_secret) => {
    try {
        let refreshToken = await APIconsumer.refreshToken(refresh_token, client_id,  client_secret)// generamos el tokenRefresh, con el primero
        const payload = {
            email: reqbody.email,
            refreshToken: companyBBDD.refresh_token,
            token: refreshToken.access_token,
            iat: Date.now()
        }
        return jwtr.sign(payload, process.env.TOKEN)
    } catch (error) {
        console.log(e)
    }
}