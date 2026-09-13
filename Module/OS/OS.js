import os from "os";

console.log("Architecture==> ", os.arch());
console.log("CPU==> ", os.cpus());
console.log("version==> ", os.version());
console.log("Platform==> ", os.platform());
console.log("homedir==> ", os.homedir());
console.log("total memory==> ", os.totalmem() / 1024 / 1024 / 1024 + " GB");
console.log("total memory==> ", os.freemem() / 1024 / 1024 / 1024 + " GB");
console.log("Constants==> ", os.constants);
console.log("Home Dir==> ", os.homedir());
console.log("User Info==> ", os.userInfo());
console.log("Host Name==> ", os.hostname());
console.log("load average==> ", os.loadavg());
console.log("Machine==> ", os.machine());
console.log("Network Interfaces==> ", os.networkInterfaces());
