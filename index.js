//let fs = require('fs');

/*Challenge 1:
Simply print the contents of the text file to the screen.
let fs = require('fs');

fs.readFile('./challenge2/info.txt', 'utf8', (err, data) => {
   if (err) {
      throw err;
   }
   console.log(data);
});*/

/*Challenge 2:
Add the names of everyone in your group to the end of the text file.

let myGroup = ['Bill', 'Sue', 'Burt'];

for (let i = 0; i < myGroup.length; i++) {
   fs.appendFileSync('./challenge2/info.txt', `${myGroup[i]}, `);
};*/

/*Challenge 3:
The file was incorrectly named binfo.txt...Rename it to
info.txt(only using js!)

fs.renameSync('./challenge3/binfo.txt', './challenge3/info.txt');


Challenge 4:
   Create a new folder within the challenge4 folder called "copyfolder".Then copy info.txt into that folder.
   */

// fs.mkdirSync('./challenge4/copyfolder');
//
//fs.copyFileSync('./challenge4/info.txt', //'./challenge4/copyfolder/info');


//Challenge 5:
//   Replace all of the "-"
//'s inside the text file with spaces.

//let fileStr = fs.readFileSync('./challenge5/info.txt', 'utf8');

//fileStr = fileStr.replace(/-/g, ' ');

//fs.writeFileSync('./challenge5/info.txt', fileStr);



//Challenge 6:
// Display all files that end with ".txt".Don 't hard code the file //names!


//let dir = fs.readdirSync('./challenge6');

//console.log(dir);

//for (let i = 0; i < dir.length; i++) {
// if (dir[i].slice(dir[i].length - 4) === '.txt') {

//  console.log(dir[i]);
//   }
//}
