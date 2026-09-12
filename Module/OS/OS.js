import os from 'os';

console.log("Architecture==> ",os.arch());
console.log("CPU==> ", os.cpus());
console.log("version==> ",os.version());
console.log("Platform==> ",os.platform());
console.log("homedir==> ", os.homedir());
console.log("total memory==> ", ((os.totalmem()/1024)/1024)/1024 + " GB");
console.log("total memory==> ", ((os.freemem()/1024)/1024)/1024 + " GB");
