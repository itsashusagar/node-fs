const fs = require('fs')
const content = 'Helloo I am Writing.....';
const file = 'sample.txt'

fs.writeFile(file, content, (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("File has Been Written....")
})