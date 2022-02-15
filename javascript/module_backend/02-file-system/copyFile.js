const fs = require('fs')

fs.copyFile('new-file.txt','destination.txt', (err) => {
    if (err) {
        console.log(err, 'copylink failed')
        return
    }
    console.log('The file was copied succesfully into destination.txt')
} )