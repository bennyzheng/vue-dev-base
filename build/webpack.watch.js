let spawn = require("child_process").spawn;

module.exports = () => {
    return new Promise((resolve, reject) => {
        spawn("node", ["--max_old_space_size=2048", "./node_modules/webpack/bin/webpack.js", "-w", "--color"], {stdio: "inherit"})
            .on("close", () => {
                resolve();
            }).on("error", () => {
            reject("[webpack]: 启动webpack监听失败");
        });
    });
}
