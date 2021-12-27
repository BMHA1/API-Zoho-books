const { use } = require('../route/customer')

const dotenv = require('dotenv').config()
global.fetch = require("node-fetch")



module.exports.refreshToken = async (refresh_token, client_id, client_secret) => {
    try {
        let result = await fetch(process.env.REFRESH_TOKEN + `${refresh_token}&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=http://www.zoho.com/books&grant_type=refresh_token`, {
            method: "POST"
        })
        const token = await result.json();
        console.log(token);
        return token
    } catch (error) {
        console.log(error)
    }
}


//metodo para crear usuarios en zohobooks, (payload)
module.exports.createUser = async (user, idUser) => {
    console.log(process.env.URl_ENDPOINT + idUser.ID_usuario)
    try {
        let result = await fetch(process.env.URl_ENDPOINT + idUser.ID_usuario, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${idUser.token}`
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

//metodo para buscar todos los usuario, (payload)
module.exports.listCustomers = async (idUser) => {
    try {
        let result = await fetch(process.env.URl_ENDPOINT + idUser.ID_usuario, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${idUser.token}`
            }
        })
        const data = await result.json();
        return data
    } catch (error) {
        console.log(error)
    }
}
//metodo para buscar por el nombre del usuario, (nombre del usuario que quiero buscar, payload)
module.exports.shearchCustomerName = async (name, idUser) => {
    try {
        let result = await fetch(process.env.URl_ENDPOINT + `${idUser.ID_usuario}&contact_name_startswith=${name}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${idUser.token}`
            }
        })
        const data = await result.json();
        return data

    } catch (error) {
        console.log(error)
    }
}
//metodo para modificar cualquier propiedad del usuario, (id_zoobook, modificación, payload)
module.exports.updateContact = async (id_dateReplace, user, idUser) => {
    console.log(user)
    try {
        let result = await fetch(process.env.URL_MODIFY_DELETE + id_dateReplace + process.env.URL_MODIFY_DELETE_ID + idUser.ID_usuario, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${idUser.token}`
            },
            body: JSON.stringify(user)
        })
        const data = await result.json();
        return data
    } catch (error) {
        console.log(error)
    }
}

//metodo para eliminar cualquier propiedad del usuario, (id_zoobook, payload)
module.exports.deleteContact = async (id_dateReplace, idUser) => {
    try {
        let result = await fetch(process.env.URL_MODIFY_DELETE + id_dateReplace + process.env.URL_MODIFY_DELETE_ID + idUser.ID_usuario, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${idUser.token}`
            },
        })
        const data = await result.json();
        return data
    } catch (error) {
        console.log(error)
    }
}
