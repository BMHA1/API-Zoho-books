
const { Company } = require('../models/index')
const hashing = require('../Helpers/HashId')

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
        const verifyCompany = await Company.findOne({ where: { ID_usuario: req.body.ID_usuario } });
        if (verifyCompany === null) {
            return "La companañia no existe"
        } else {
            let token = await hashing.compareHash(req.body.ID_usuario, verifyCompany.ID_usuario)
        }
        console.log(token + "2")
        res.status(200).json({ token })
    } catch (error) {
        res.json({
            message: 'La contraseña es incorrecta',
            errors: error,
            status: 400
        })
    }
} 