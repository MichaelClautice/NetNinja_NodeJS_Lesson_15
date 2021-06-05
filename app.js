// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners 
// Lesson 15 - Writable Streams
// -------
// to work w my file system I require th file system mod
const fs = require('fs');

// declare a var tht will stream & decode content FROM readMe.txt
const myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

// declare a var tht will create a destination file & write TO tht destination file 
const myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
// use th on() event listener on the myReadStream variable to...
// handle th data event & also execute a call back function 
// call back fnctn will take a chunk of data &...
// con.log a test mssg, also...
// execute th write() mthd on the myWriteStream variable
myReadStream.on('data', function(chunk){
    console.log('\nnew chunk received\n');
 myWriteStream.write(chunk);
});