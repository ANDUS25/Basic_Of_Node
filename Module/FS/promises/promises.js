import fs from "fs";

// console.log('====================================');
// console.log(fs);
// console.log('====================================');

fs.promises
  .writeFile(
    "example.txt",
    "This file is for promises testing purpose only.",
    "utf-8"
  )
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

fs.promises
  .readFile("example.txt", "utf-8")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

fs.promises
  .unlink("example.txt", "utf-8")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

