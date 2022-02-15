const fs = require('fs')

fs.appendFile('new-file.txt','este es la data del append', (err) => {
if (err){
    console.log('The append failed')
    return
}})

console.log('the string "este es la data del append" was appened to file! :)')