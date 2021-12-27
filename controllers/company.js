
const { Company } = require('../models/index')
const hashing = require('../Middleware/HashId')

module.exports.registerCompany = async (req, res) => {
    try {
        let company = req.body
        company.ID_usuario = hashing.createHash(company.ID_usuario) //hasheamos ID_usuario
        company = await Company.create(company)
        res.status(200).json({ Data: company})
    } catch (error) {
        res.json({
            message: 'No se ha logrado registrar la compañia',
            errors: error,
        })
        console.log(error)
    }
}

module.exports.loginCompany = async (req, res) => {
    try {
        const verifyCompany = await Company.findOne({ where: { email: req.body.email}});
        if (verifyCompany === null) {
            return "La companañia no existe"
        } else {
            let token = await hashing.compareHash(req.body, verifyCompany)
            res.status(200).json({ token })
        }
    } catch (error) {
        res.json({
            message: 'La contraseña es incorrecta',
            errors: error,
            status: 400
        })
    }
} 

