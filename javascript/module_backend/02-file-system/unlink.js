const fs = require('fs')

fs.unlink('new-file.txt',(err) => {
    if (err) {
        console.log(err,'unlink failed')
        return
    }
    console.log('unlink sucess')
})