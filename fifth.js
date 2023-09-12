// FS Module Delete a File

const fs = require('fs')
fs.unlink('sample.txt', (err) => {
    if(err){
        console.log(err)
    }
    console.log('File has been deleted..')
})