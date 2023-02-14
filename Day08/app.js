const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(filePath, "This is simple text file");

// fs.writeFileSync("apple.txt", "This is apple file");
// fs.readFile(filePath, "utf8", (err, item) => {
//   console.log(item);
// });

// fs.appendFile(filePath, " and the file name is apple.txt", (err) => {
//   if (!err) console.log("file is updated");
// });
// fs.rename(filePath, `${dirPath}/fruits.txt`, (err) => {
//   if (!err) console.log("file name is updated");
// });

fs.unlinkSync(`${dirPath}/fruits.txt`);
