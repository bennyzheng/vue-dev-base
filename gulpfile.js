const gulp = require("gulp");
const spritesmith = require("gulp.spritesmith");
const vinylBuffer = require("vinyl-buffer");
const imagemin = require("gulp-imagemin");
const pngquant = require("imagemin-pngquant");
const gulpCache = require('gulp-cache');
const glob = require("glob");
const path = require("path");

// 生成雪碧图
gulp.task("spritesmith", () => {
    var dirs = glob.sync(__dirname + "/src/sprites/*/");

    dirs.forEach(basename => {
        basename = path.basename(basename);

        let spriteData = gulp.src(`./src/sprites/${basename}/*.png`)
            .pipe(spritesmith({
                imgName: `sprites-${basename}.png`,      // 生成的图片
                cssName: `_${basename}.scss`,    // 生成的sass文件
                padding: 20,                         // 图标之间的距离
                algorithm: "top-down",               // 图标的排序方式
                cssTemplate: "./scss.template.handlebars",        // 模板
                imgPath: `/images/sprites-${basename}.png`,
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
    gulp.src('./src/images/**/*.{png,jpg,gif,ico}')
        .pipe(gulpCache(imagemin({
            progressive: true,
            use: [pngquant()]
        })))
        .pipe(gulp.dest('./htdocs/images'));
});

gulp.task("cleanimagecache", (done) => {
    return gulpCache.clearAll(done);
});

gulp.task("default", ["cleanimagecache", "imagemin", "spritesmith"]);