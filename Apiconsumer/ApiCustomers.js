const dotenv = require('dotenv').config()


const url = process.env.ROOT_URL
const accesTokent= process.env.ACCES_TOKEN
console.log(url)
console.log(accesTokent)

export const APIConsumer = {

    // Accestoken:async()=>{
    //     try {
    //         let result = await fetch(accesTokent, {
    //     } catch (error) {
            
    //     }
    // }

    //    
    listCustomers: async (user) => {
        try {
            let result = await fetch(url, {
                method: "POST",
                headers: { 'Authorization': 'application/json' },
            })
            const token = await result.json();
            console.log(token);
            return token
        } catch (error) {
            console.log(error)
        }
    }
}



