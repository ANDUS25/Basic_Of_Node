import fs from "fs";
// --------------------------------------asynchronous methods-----------------------------------
// Use this method to write file in a async manner.

const writeFile = async () => {
  try {
    await fs.writeFile(
      "example.txt",
      "This file is created by async function.",
      "utf-8"
    );
    console.log("File written successfully.");
  } catch (error) {
    console.error("Error writing file:", error);
  }
};

writeFile();

// Use this method to read file content ina async manner
const readFile = async () => {
  try {
    fs.readFile("example.txt", "utf-8", (error, data) => {
      console.log("====================================");
      console.log("This is file content:- ", data);
      console.log("====================================");
    });
  } catch (error) {
    console.log("This is an error:- ", error);
  }
};
readFile();

// Use this method to delete file in a async manner.
const removeFile = async () => {
  try {
    fs.unlink("example.txt");
    console.log("File deleted successfully.");
  } catch (error) {
    console.log("This is an error:- ", error);
  }
};
removeFile()

// // Use this method to get file all information in a async manner.
// const fileContent = fs.stat("copyFile.txt", (error, data) => {
//   console.log(data);
// });
