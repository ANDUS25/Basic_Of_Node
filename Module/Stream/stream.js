import { createReadStream, createWriteStream } from "fs";
import path from "path";

const inputFilePath = path.join(import.meta.dirname, "input.txt");
const outputFilePath = path.join(import.meta.dirname, "output.txt");

// utf-8 is for converting binary data into readable format
// highwaterMark is for how many character need to pass at a time
const readFileData = createReadStream(inputFilePath, {
  encoding: "utf-8",
  highWaterMark: 20,
});

const writeFileData = createWriteStream(outputFilePath);

// whatever data we have read need to pass in that file.
const data = readFileData.pipe(writeFileData);
console.log("====================================");
console.log("data", data);
console.log("====================================");
