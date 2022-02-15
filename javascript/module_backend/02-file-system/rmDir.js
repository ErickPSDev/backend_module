const fs = require ('fs')

const directoryToDelete = "newDirectory"

//leer directorio, con el arreglo de archivos
//por cada archivo ir borrando --unLink()
//Eliminar el directorio con rmdir()

function rmdir (pathToDelete){
    fs.readdir(pathToDelete, (err, filesAndDirectories) => {
        if (err){
            console.error(err, 'Read failed')
            return
        }
        console.log(filesAndDirectories)
        filesAndDirectories.forEach((file, index) => {
           // console.log(file)
           const newPathFile = `${pathToDelete}/${file}` // concatena dos arrays 
           console.log(newPathFile)
           fs.unlink(newPathFile,(err) => {
                if(err) {
                    console.error(err, 'Unlink failed')
                    return
                }
                console.log('Delete file: ', file)
                //validar que sea el ultimo elemento que borra
                if(index === filesAndDirectories.length - 1){
                    fs.rmdir(pathToDelete,(err) => {
                        if(err) {
                            console.error(err, 'remove directory failed')
                            return
                        }
                        console.log('directory deleted')
                    })
                }
            })
        })
    })
}

rmdir('newDirectory')


function rmdirSync (pathToDelete){
    const files = fs.readdirSync // falta codigo
}