const jwtr = require("jsonwebtoken");
const bcrypt = require('bcrypt');


module.exports.createHash = (password) => {
    let encrypted = bcrypt.hashSync(password, 10)
    return encrypted
}

module.exports.compareHash = async (reqbody, companyBBDD) => {
    try {
        let compare = bcrypt.compareSync(reqbody, companyBBDD)
        if (compare) {
            const payload = {
                avatar: project.avatar,
                name: project.name,
                data: project.id,
                role: project.role,
                iat: moment().unix(),
                exp: moment().add(2, 'days').unix()
            }
            return jwtr.sign(payload, process.env.TOKEN)
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