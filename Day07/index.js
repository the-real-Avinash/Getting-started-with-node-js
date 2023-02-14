// console.log(process.argv[2]);
const { dir } = require("console");
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname);
console.log(dirPath);

for (let i = 0; i < 5; i++) {
  fs.writeFileSync(`hello ${i}.txt`, "A simple text file");
}
const input = process.argv;

fs.readdir(dirPath, (err, files) => {
  files.forEach((item) => {
    console.log(item);
  });
});

// if (input[2] == "add") {
//   fs.writeFileSync(input[3], input[4]);
// } else if (input[2] == "remove") {
//   fs.unlinkSync(input[3]);
// } else {
//   console.log("Invalid Input");
