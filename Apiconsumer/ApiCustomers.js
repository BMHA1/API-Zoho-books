
const dotenv = require('dotenv').config()
global.fetch = require("node-fetch")

const url = "https://books.zoho.eu/api/v3/contacts?organization_id=20080221283"


setInterval(() => {
    module.exports.refrestoken = async () => {
        console.log(process.env.REFRESH_TOKEN)
        try {
            let result = await fetch(process.env.REFRESH_TOKEN, {
                method: "POST"
            })
            const token = await result.json();
            console.log(token);
            return token
        } catch (error) {
            console.log(error)
        }
    }
}, 3560)



module.exports.listCustomers = async () => {
    console.log(url)
    try {
        let result = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 1000.a6a642cae8551d2b0f27a47271cf9a5b.0d963816a9b0a3ba58d80a0549994e76'}
        })
        const data = await result.json();
        console.log(data);
        return data

    } catch (error) {
        console.log(error)
    }
}
module.exports.shearchCustomer = async (user) => {
    try {
        let result = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer${Token}`
            }
        })
        const data = await result.json();
        console.log(data);
        return data
    } catch (error) {
        console.log(error)
    }
}

module.exports.refrestoken = async () => {
    console.log(process.env.REFRESH_TOKEN)
    try {
        let result = await fetch(process.env.REFRESH_TOKEN, {
            method: "POST"
        })
        const token = await result.json();
        console.log(token);
        return token
    } catch (error) {
        console.log(error)
    }
}

