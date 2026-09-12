// Path is a in-build module in node js, no need to use any external package for path

import { dirname, basename, extname, join, parse, relative, } from "path";

console.log("====================================");
//Those are inbuilt modules which are globally available in Node.js
// console.log(__filename);
// console.log(dirname);

const pathName = join("Study","Node","Basic.js")

console.log('fileName',basename(pathName));

// return file directory location (remove file name)
console.log("dirName ==>", dirname(pathName));

// return file extension
console.log("extname ==>", extname(pathName));

// Return one object with information about the path
console.log("Parse Object==>", parse(pathName));

// Return a path from __ to __
console.log(relative("E:/study/node", "basic.js"));
console.log("====================================");
