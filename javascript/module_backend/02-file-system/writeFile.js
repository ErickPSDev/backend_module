const fs = require('fs')

//fs.writeFile(file, data[, options], callback)
const content = `Esto es el contenido agregado desde nodejs`

fs.writeFile('new-file.txt', content, 'utf-8', (error) => {
    if (error) {
        console.log('No se puede crear el archivo')
    } else {
        console.log('Se ha creado el archivo new-file.txt correctamente')
    }
})