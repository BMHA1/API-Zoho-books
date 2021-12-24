const { customer } = require('../models/index.js')



module.exports.CreateCustomer = async (req, res) => {
    try {

        let Customerss = await Customer.findAll({})
        res.status(200).json({ Data: Customer })
    } catch (error) {
        res.json({
            message: 'No eres admin.',
            errors: error,
        })
    }
}

module.exports.SearchCustomers