
const fs = require('fs'); //import * as fs from 'fs';

// readabale stream in node START
const readStream = fs.createReadStream('test.php','utf-8');

readStream.on('data',function(chunk) {
    console.log(chunk); 
});
// readabale stream in node END

// writable stream in node START
const writeStream = fs.createWriteStream('test.txt','utf-8');

readStream.on('data',(chunk) => {
    console.log(chunk); 
    writeStream.write(chunk);
});
// writable stream in node END

// writable stream with PIPE in node START
const writeStream1 = fs.createWriteStream('test1.txt','utf-8');

readStream.pipe(writeStream1);
// writable stream with PIPE in node END