import fs from "fs";

const fileName = "example.pdf";

// --------------------------------------synchronous methods-----------------------------------
// use This to create a file
const writeFile = fs.writeFileSync(
  fileName,
  `I've create this file for testing purpose only.`,
  "utf-8",
);
// console.log("This is writeFile", writeFile);

// Use this to read file content
// const readFile = fs.readFileSync(fileName, "utf-8");
// console.log("This is readFile ==>", readFile);

// Change the file permission using chmodSync method
// const chModFile = fs.chmodSync(fileName, 0o777);
// console.log("This is chModFile ==>", chModFile);

// Close the file using closeSync method
// const closeFile = fs.closeSync(1);
// console.log("This is closeFile ==>", closeFile);

// Copy the file using copyFileSync method
// const copyFile = fs.copyFileSync(fileName, "copyFile.txt");
// console.log(
//   "This is copyFile ==>",
//   copyFile === undefined && "File copied successfully",
// );

// Use this to update file
const updateFile = fs.appendFileSync(
  fileName,
  "\nadded appended data in this file.",
  "utf-8",
);

// use This to rename file name
// const renameFileName = fs.renameSync(fileName, "renameFile.txt");

// User this to check file exist or not
// const existOrNoy = fs.existsSync("renameFile.txt");
// const existOrNoyCopy = fs.existsSync("copyFile.txt");
// console.log("This is existOrNoy ==>", existOrNoy);
// console.log("This is existOrNoyCopy ==>", existOrNoyCopy);

// copy already exist file content into new file
// const copyFile = fs.copyFileSync("renamefile.txt","copyFile.txt");

// Use this to check file access
// const checkAccess = fs.accessSync("renameFile.txt", fs.constants.F_OK);

// Use this to delete file
// const removeFile = fs.unlinkSync("example.pdf");

// console.log('====================================');
// console.log('writeFile',writeFile);
// console.log('readFile',readFile);
// console.log('updateFile',updateFile);
// console.log('renameFileName',renameFileName);
// console.log('existOrNoy',existOrNoy);
// console.log('copyFile',copyFile);
// console.log('checkAccess',checkAccess);
// console.log('removeFile',removeFile);
// console.log('====================================');

// --------------------------------------synchronous methods-----------------------------------
// 1. Write file using writeFileSync method
// 2. Read file using readFileSync method
// 3. Update file using appendFileSync method
// 4. Rename file using renameSync method
// 5. Copy file using copyFileSync method
// 6. Delete file using unlinkSync method
