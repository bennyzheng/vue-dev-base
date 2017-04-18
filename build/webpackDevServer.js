let spawn = require("child_process").spawn;

module.exports = () => {
    console.log("正在启动webpack-dev-server");

    return new Promise((resolve, reject) => {
        spawn("node", ["--max_old_space_size=2048", "./node_modules/webpack-dev-server/bin/webpack-dev-server.js"], {stdio: "inherit"})
            .on("close", () => {
                resolve();
            }).on("error", () => {
            reject("[webpack-dev-server]: 启动webpack-dev-server失败");
        });
    });
}
