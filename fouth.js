const fs = require('fs');
fs.rename('ssdsd.txt', 'newname.txt', (err) => {
    if(err){
        console.log(err)
    }
    console.log("file renamed successfully..")
})