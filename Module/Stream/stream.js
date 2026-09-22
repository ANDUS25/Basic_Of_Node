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

writeFileData.on("finish", () => {
  console.log("Data has been successfully copied to the new file.");
});

writeFileData.on("close", () => {
  console.log(
    "Write File has just closed. Data has been successfully copied to the new file.",
  );
});

writeFileData.on("error", () => {
  console.log("An error occurred while writing to the file.");
});

// whatever data we have read need to pass in that file.
const data = readFileData.pipe(writeFileData);
console.log("====================================");
console.log("data", data);
console.log("====================================");
