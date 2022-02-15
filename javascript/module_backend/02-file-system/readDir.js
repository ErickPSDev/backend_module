const fs = require ('fs')

fs.readdir('../02-FILE-SYSTEM', (err, files) => {
    if (err) {
        console.error(err, "Read direcrotry failed")
        return // break, salidas tempranas
    }
    console.log('Read directory sucessfully', files)
} )