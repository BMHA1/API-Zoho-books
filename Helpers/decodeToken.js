const jwt = require("jsonwebtoken");



module.exports.decodeToken = (token) => {
    let objectUser = jwt.decode(token)
    return objectUser
}
