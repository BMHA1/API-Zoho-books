<!-- # API-Zoho-books
Conexión con la api zohobooks


## Generar el token

Para poder tener acceso a zoho-books hay que generar el Token 0Autho, lo pasos son los siguientes: 
 
 * Generar client_id y client_secret en la consola de desarrollador de zoho-books `https://accounts.zoho.com/developerconsole` debemos crear un server self client.
 * debemos hacer una petición POST desde postman: `https://accounts.zoho.eu/oauth/v2/token?code=<sustituir_CODE>&client_id=<sustituir CLIENT_ID>&client_secret=<sustituir_CLIENT_SECRET>&redirect_uri=http://www.zoho.com/books&grant_type=authorization_coder`  
 * La petición nos regresa un token que expira cada 3600  seg, y un token para refrescar dicho token 
 * La dirección para refrescar el token es: `https://accounts.zoho.eu/oauth/v2/token?refresh_token=<sustituir por el refrestoken de la respuesta anterior>&client_id=1000.B5PWQIQWY5Y6AIE5LWXJ4X2CHO32MO&client_secret=5024859d57d04c6ed8452718a5d5a3275a19488112&redirect_uri=http://www.zoho.com/books&grant_type=refresh_token`
 * el link anterior se mantendrá para el mismo usuario y cada 59 min se tiene que llamar
    
   -->
    