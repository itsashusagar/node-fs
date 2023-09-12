const fs = require('fs');
const contentToAppend = 'This will be appended to the file.';
fs.appendFile('example.txt', contentToAppend, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data has been appended to the file.');
});
