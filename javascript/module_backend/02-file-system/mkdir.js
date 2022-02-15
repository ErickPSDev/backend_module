const fs = require ('fs')

fs.mkdir('newDirectory',{recursive: true}, (err) => {
    if (err){
        console.log(err, 'New directory creation failed')
        return
    }
    console.log('The directoy: newDirectory was sucessfully created')
})
