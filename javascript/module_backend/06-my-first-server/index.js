//se importa el modulo HTTP
const http = require('http')

//request, va a solicitar
//response, va a esperar respuesta
const server = http.createServer((request, response) => {
    console.log('url: ', request.url)
    console.log('method: ', request.method)
    response.write('Hola desde mi servidor de Node.JS')
    response.end('Fin')
})

server.listen(8080, () => {
    console.log('Servidor escuchando en el puerto :8080')
})

