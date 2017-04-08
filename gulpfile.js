const gulp = require("gulp");
const spritesmith = require("gulp.spritesmith");
const vinylBuffer = require("vinyl-buffer");
const imagemin = require("gulp-imagemin");
const pngquant = require("imagemin-pngquant");
const gulpCache = require('gulp-cache');
const fs = require('fs');
const crypto = require('crypto');
const webpackConfig = require("./webpack.config");
const webpack = require("webpack");

// 如果需要其它目录继续增加，生成/htdocs/images/sprites-front.png & /src/sprites/_front.scss
const spriteDirs = ["front"];

// 生成雪碧图
gulp.task("spritesmith", () => {
    let now = new Date().getTime();

    spriteDirs.forEach(item => {
        let spriteData = gulp.src(__dirname + `/src/sprites/${item}/*.png`)
            .pipe(spritesmith({
                imgName: `sprites-${item}.png`,      // 生成的图片
                cssName: `_${item}.scss`,    // 生成的sass文件
                padding: 20,                         // 图标之间的距离
                algorithm: "top-down",               // 图标的排序方式
                cssTemplate: "./scss.template.handlebars",        // 模板
                imgPath: `/images/sprites-${item}.png`,
                spritestamp: true
            }))

        spriteData.img
            .pipe(vinylBuffer())
            .pipe(imagemin({
                progressive: true,
                use: [pngquant()]
            }))
            .pipe(gulp.dest("./htdocs/images"));

        spriteData.css.pipe(gulp.dest("./src/sprites"));
    });
});

// 压缩图片（from /src/images to /htdocs/images)
// 使用了cache，若有问题运行npm run imgcache
gulp.task("imagemin", () => {
    gulp.src('./src/images/*.{png,jpg,gif,ico}')
        .pipe(gulpCache(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('./htdocs/images'));
});

gulp.task("cleanimagecache", (done) => {
    return gulpCache.clearAll(done);
});

gulp.task("default", ["cleanimagecache", "imagemin", "spritesmith"]);