
## EJEMPLO CON OAUTH 2 =< NO USAR >
# 1
Crear un proyecto nuevo en firebase
`https://console.firebase.google.com/u/0/?hl=es`

# 2
Abrir la consola de Google cloud platform
`https://console.cloud.google.com/`

# 3
Seleccionar su proyecto y dirigirse a la pantalla de consentimiento de OAuth (buscar 'OAuth' ó 'pantalla de consentimiento de OAuth' en la lupita).
`https://console.cloud.google.com/apis/credentials/consent?referrer=search&hl=es`

# 4
LLenan el formulario y siguen los pasos (4) para finalizar la pantalla de consentimiento

# 5
Dirigirse a la pestaña de credenciales dentro de la misma categoria APIS y SERVICIOS de google
`https://console.cloud.google.com/apis/credentials?hl=es`

# 6
Crear una credencial nueva de 'ID de cliente de OAuth' y copiar el 'clientID' y 'clientSecret'
URI de redireccionamiento autorizados=> `https://developers.google.com/oauthplayground`

# 7
Pegar en los lugares correspondientes de la configuración de nodemailer el 'clientID' y 'clientSecret'.

# 8
Dirigirse a la página de google oauth playground console
`https://developers.google.com/oauthplayground/`
GUIA: `https://stackoverflow.com/questions/24098461/nodemailer-gmail-what-exactly-is-a-refresh-token-and-how-do-i-get-one`
ENLACE PRIMITIVO: `http://masashi-k.blogspot.fr/2013/06/sending-mail-with-gmail-using-xoauth2.html`

# 9
Se genera el refresh token y lo pegamos en el lugar correspondiente de la configuración de nodemailer.

# 10
ENVIAR SPAM!
