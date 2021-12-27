# API-Zoho-books
Esta API permite gestionar y englobar todos los datos de una red de empresa  que utilicen zohobooks como su software, para conectar a la api se necesita un login, en caso de no poseerlo hay que logearse. 


## Registro 

Para que una compañia que utilice zoohbooks depositar los datos en nuestra api tiene que tener los siguientes datos:

```
{
    "email":"user@gmail.com",
    "password":"user@gmail.com",
    "refresh_token": "1000.b8221f1bc8e521abda63e658246566dc.c8434734a56702bd9237eff9eabb1906",
    "client_id": "1000.B5PWQIQWY5Y6AIE5LWXJ4X2CHO32MO",
    "client_secret": "5024859d57d04c6ed8452718a5d5a3275a19488112",
    "ID_usuario": "20080221283"
}
```


* client_id: Es generado por zohobooks, especificamente en la api-console-zoho el enlace es el siguiente:[https://api-console.zoho.eu/] 
* client_secret: Es generado por zohobooks, especificamente en la api-console-zoho el enlace es el siguiente:[https://api-console.zoho.eu]
* ID_usuario: ID de la organización, se encuentra en el perfil del usuario de zohobooks 

## Login 

Cuando el usuario se logea, la api generará un token interno que será necesario para acceder a los siguientes endpoint
```
{
    "email": "user@gmail.com",
    "password": "user@gmail.com"
}
```
## Endpoints que conectan con zohobooks 
 ```
 router.post('/', controller.CreateCustomer)//Crear clientes 
 router.get('/', controller.SearchCustomers)//Visualizar clientes  
 router.get('/name', controller.SearchNameCustomer)//Visualizar clientes por nombre
 router.put('/:id', controller.UpdateContact)//Modificar alguna propiedad clientes en base datos internas
 router.delete('/:id', controller.DeleteContact)//Eliminar clientes en base datos internas
```

