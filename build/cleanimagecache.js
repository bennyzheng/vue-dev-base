let spawn = require("child_process").spawn;
let npm = process.platform == "win32" ? "npm.cmd" : "npm";

module.exports = () => {
    return new Promise((resolve, reject) => {
        spawn(npm, ["run", "imagecache"], {stdio: "inherit"})
            .on("close", () => {
                console.log("[gulp cleanimagecache]: 清除图片缓存完成");
                resolve();
            }).on("error", () => {
            reject("[gulp cleanimagecache]: 清除图片缓存失败");
        });
    });
}
