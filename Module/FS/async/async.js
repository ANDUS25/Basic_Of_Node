import fs from "fs";
// --------------------------------------asynchronous methods-----------------------------------
// Use this method to write file in a async manner.

const fileName = "example.txt";

const CommonErrorHandler = (error, sucessText) => {
  if (error) console.log("This is an error:- ", error);
  console.log(sucessText);
};

fs.writeFile(
  fileName,
  "This is sample file data for testing purpose.",
  "utf-8",
  (error) => {
    CommonErrorHandler(error, "File written successfully.");
  },
);

// Use this method to read file content ina async manner
fs.readFile(fileName, "utf-8", (error, data) => {
  CommonErrorHandler(error, data);
});

// // Use this method to delete file in a async manner.
// fs.unlink(fileName, (error) =>
//   CommonErrorHandler(error, "File deleted successfully."),
// );

// // Use this method to get file all information in a async manner.
// const fileContent = fs.stat("copyFile.txt", (error, data) => {
//   console.log(data);
// });
