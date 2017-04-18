let spawn = require("child_process").spawn;
let npm = process.platform == "win32" ? "npm.cmd" : "npm";

module.exports = () => {
    return new Promise((resolve, reject) => {
        spawn(npm, ["run", "sprites"], {stdio: "inherit"})
            .on("close", () => {
                console.log("[gulp spritesmith]: 生成雪碧图完成");
                resolve();
            }).on("error", () => {
            reject("[gulp spritesmith]: 生成雪碧图失败");
        });
    });
}
