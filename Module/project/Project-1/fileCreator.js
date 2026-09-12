import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileContentGenerator = (fileName, fileContent) => {
  fs.writeFile(`${fileName}.txt`, fileContent, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log(`File ${fileName}.txt created successfully!`);
      rl.close();
    }
  });
};

const fileNameGenerator = (fileName) => {
  rl.question("Please enter the file content: ", (fileContent) =>
    fileContentGenerator(fileName, fileContent)
  );
};

const fileCreator = () => {
  rl.question("Please enter the file name: ", (fileName) =>
    fileNameGenerator(fileName)
  );
};

fileCreator();
