/**
 * @author bennyzheng
 * @description
 * 开发模式: npm run dev
 * 生产模式: npm run build
 */
const path = require("path");
const glob = require("glob");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BabiliWebpackPlugin = require("babili-webpack-plugin"); // 由于webpack.optimize.UglifyJsPlugin不支持es6，用它代替来压缩文件
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // 将css抽离出来
const root = path.resolve(__dirname);
const entries = {};
const htmlWebpackPlugins = [];
const chunks = [];
const isProduction = process.env.NODE_ENV == "production"; // 是开发环境还是生产环境(请看package.json的script）

// 本来是支持/src/pages/**/main.js，考虑来考虑去，觉得没必要，html页面直接放根目录，里边做router好了
glob.sync(`${root}/src/pages/**/main.js`).forEach(file => {
    const array = file.split("/");
    const index = array.slice(path.dirname(`${root}/src/pages`).split("/").length + 1, array.length - 1).join("/");
    entries[index] = file;
    chunks.push(index);

    // 为每个main.js生成一个对应的html文件
    htmlWebpackPlugins.push(new HtmlWebpackPlugin({
        "template": `${path.dirname(file)}/template.html`, // 模板名
        "filename": `${index}.html`, // 生成的文件名
        "hash": false, // 是否加上hash
        "chunks": ["common", index], // 添加进去的js chunk
        "xhtml": true, // 是否用<tag />表示自闭合
        "chunksSortMode": "dependency", // chunk排序方式
        // https://github.com/kangax/html-minifier#options-quick-reference
        "minify": !isProduction ? false : { // 是否压缩
            "removeComments": true,
            "collapseWhitespace": true
        }
    }));
});

// 用到的插件
const plugins = [
    // https://github.com/ampedandwired/html-webpack-plugin
    ...htmlWebpackPlugins,
    new webpack.optimize.OccurrenceOrderPlugin(), // 根据模板使用次数而配给更短的id
    new webpack.DefinePlugin({ // 定义js里可以使用的环境变量
        __DEBUG__: !isProduction
    }),
    new ExtractTextPlugin({ // 抽离出css
        filename: "css/[name].css?v=[contenthash]"
    }),
    new webpack.optimize.CommonsChunkPlugin({ // 将通用css抽出来
        name: "common", // 公共模块的名称
        chunks: chunks, // chunks是需要提取的模块
        minChunks: chunks.length
    })
];

if (isProduction) {
    console.log("-----------------正在使用生产模式构建工程------------------");

    plugins.push(new BabiliWebpackPlugin({ // 压缩
        "presets": [["babili", {
            "removeConsole": true,
            "removeDebugger": true
        }]]
    }));
}

module.exports = {
    "entry": entries,
    "output": {
        "path": `${root}/htdocs`,
        "publicPath": "/",
        "filename": "js/[name].js?v=[chunkhash]",
        "chunkFilename": "js/[id].js?v=[chunkhash]"
    },
    "resolve": {
        "extensions": [".js", ".vue"],
        "alias": {
            "vue$": "vue/dist/vue.min.js",
            "mockjs$": "mockjs/dist/mock-min.js",
            "axios$": "axios/dist/axios.min.js",
            "conf": `${root}/src/conf`,
            "lib": `${root}/src/lib`,
            "sprites": `${root}/src/sprites`,
            "store": `${root}/src/store`,
            "ui": `${root}/src/ui`
        }
    },
    "module": {
        "loaders": [
            {
                "test": /\.js$/,
                "loader": "babel-loader?presets[]=babel-preset-es2015",
                "include": root,
                "exclude": /node_modules/
            },
            {
                "test": /\.vue$/,
                "loader": "vue-loader",
                "options": {
                    extract: true,
                    "loaders": {
                        js: "babel-loader?presets[]=babel-preset-es2015",
                        scss: ExtractTextPlugin.extract({
                            "fallback": "vue-style-loader",
                            "use": `css-loader?minimize=${isProduction}!postcss-loader!sass-loader?root=/`
                        }),
                    }
                }
            },
            {
                test: /\.(css|scss|sass)$/,
                loader: ExtractTextPlugin.extract({
                    "fallback": "style-loader",
                    "use": `css-loader?minimize=${isProduction}!postcss-loader!sass-loader?root=/`
                })
            },
            {
                "test": /\.json$/,
                "loader": "json-loader"
            }
        ],
        // 不对某些文件解析依赖
        "noParse": [/vue\.min\.js$/, /mockjs\/dist\/mock-min\.js$/, /axios\.min\.js$/]
    },
    "plugins": plugins
}