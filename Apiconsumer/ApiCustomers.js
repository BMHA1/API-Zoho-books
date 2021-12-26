const { use } = require('../route/customer')

const dotenv = require('dotenv').config()
global.fetch = require("node-fetch")

const url = "https://books.zoho.eu/api/v3/contacts?organization_id=20080221283"


// setInterval(() => {
//     module.exports.refrestoken = async () => {
//         console.log(process.env.REFRESH_TOKEN)
//         try {
//             let result = await fetch(process.env.REFRESH_TOKEN, {
//                 method: "POST"
//             })
//             const token = await result.json();
//             console.log(token);
//             return token
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }, 3560)



module.exports.createUser = async (user) => {
    console.log(user.contact_type)
    try {
        let result = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer {refrestoken}`
            },
            body: JSON.stringify({
                "contact_name": user.contact_name,
                "company_name": user.company_name,
            })
        })
        const data = await result.json();
        return data
    } catch (error) {
        console.log(error)
    }
}
module.exports.listCustomers = async () => {
    try {
        let result = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 1000.940084b8ef16ded76a29604eb41c3228.7b15dfd9eb5d46a5f55cd003398d43b7'
            }
        })
        const data = await result.json();
        // console.log(data.contacts);
        return data

    } catch (error) {
        console.log(error)
    }
}
module.exports.shearchCustomerName = async (name) => {
    try {
        let result = await fetch(url + `&contact_name_startswith=${name}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 1000.940084b8ef16ded76a29604eb41c3228.7b15dfd9eb5d46a5f55cd003398d43b7'
            }
        })

        const data = await result.json();
        // console.log(data.contacts);
        return data

    } catch (error) {
        console.log(error)
    }
}
module.exports.updateContact = async (id_dateReplace, user) => {
    console.log(user)
    try {
        let result = await fetch(`https://books.zoho.eu/api/v3/contacts/${id_dateReplace}?organization_id=20080221283`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 1000.904e8e1e5fab559b013dd2d8a839d014.a5ce0c719290c0b7a1cb0e4537c8554e'
            },
            body: JSON.stringify(user)
        })
        const data = await result.json();
        return data
    } catch (error) {
        console.log(error)
    }
}
module.exports.deleteContact = async () => {
    try {
        let result = await fetch(`https://books.zoho.eu/api/v3/contacts/${id_dateReplace}?organization_id=20080221283`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 1000.904e8e1e5fab559b013dd2d8a839d014.a5ce0c719290c0b7a1cb0e4537c8554e'
            },
        })
        const data = await result.json();
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

