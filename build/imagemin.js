let spawn = require("child_process").spawn;
let npm = process.platform == "win32" ? "npm.cmd" : "npm";

module.exports = () => {
    return new Promise((resolve, reject) => {
        spawn(npm, ["run", "imagemin"], {stdio: "inherit"})
            .on("close", () => {
                console.log("[gulp imagemin]: 压缩图片完成");
                resolve();
            }).on("error", () => {
            reject("[gulp imagemin]: 压缩图片失败");
        });
    });
}
