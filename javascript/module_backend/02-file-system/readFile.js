const fs = require('fs')
fs.readFile('new-file.txt', 'utf-8', (err,data) => {
    if (err) {
        console.log('No se ha podido leer el archivo')
        return
    }
    console.log(data)
}) 
