// Path is a in-build module in node js, no need to use any external package for path

import {
  dirname,
  basename,
  extname,
  join,
  parse,
  relative,
  format,
  isAbsolute,
} from "path";

console.log("====================================");
//Those are inbuilt modules which are globally available in Node.js
// This --dirname and __filename are only availbel in common.js noe in module.js
// console.log(__filename);
// console.log(dirname);

// In windows it work with "\" but in mac or linux it work with "/" so because of this use join menthod which handle all secnarios.
const pathName = join("Study", "Node", "Basic.js");

console.log("pathName ", pathName);

console.log("fileName", basename(pathName));

// return file directory location (remove file name)
console.log("dirName ==>", dirname(pathName));

// return file extension
console.log("extname ==>", extname(pathName));

// Return one object with information about the path
console.log("Parse Object==>", parse(pathName));

// Return boolean value if the path is absolute or not. Absolute path means the full path from root directory to the file.
console.log("Absoulte Path==>", isAbsolute("/Module/Path/basic.js"));
console.log("Absoulte Path==>", isAbsolute("basic.js"));

console.log("Relative Path==>", relative("E:/study/node", "basic.js"));

// Return the file path related data in object format within details.
console.log(
  "Format==>",
  format({
    root: "igonred",
    dir: "E:/study/node",
    base: "basic.js",
    name: "igonred",
    ext: ".js",
  }),
);

// Return a path from __ to __
console.log(relative("E:/study/node", "basic.js"));
console.log("====================================");
