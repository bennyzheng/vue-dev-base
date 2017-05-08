let spawn = require("child_process").spawn;
let npm = process.platform == "win32" ? "npm.cmd" : "npm";
process.env.SASS_BINARY_SITE = "https://npm.taobao.org/mirrors/node-sass/";

// 用yarn就稍改改吧
spawn(npm, ["install", "--registry=https://registry.npm.taobao.org"], {stdio: "inherit"});
