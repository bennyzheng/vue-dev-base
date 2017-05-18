# Vue项目说明

简单看看，别强迫症~喜欢改成啥样就啥样，搞砸了是自己的事

对了，用这套东西之前请先学一下Vue全家桶，至少知道怎么用npm装依赖吧！

看起来，已经兼容了win7/win10/mac.

## 安装方法

一般来说直接运行npm install即可，但如果你访问国外网站很慢，可以运行以下命令(仅mac有效，win估计要设置环境变量)：

```text
SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ npm install --registry=https://registry.npm.taobao.org
```

它可以将镜像临时切到淘宝npm镜像中，并且把蛋疼的node-sass的binding.node文件也切到淘宝镜像。

若是使用yarn，也同样可以设置SASS_BINARY_SITE来提高速度。

## 相关技术说明

* **前台涉及技术**

    * vue
    * vuex
    * vue-router - 路由功能
    * axios - 取代vue-resource，用于发送ajax请求
    * mockjs - 拦截ajax请求，自造假数据
    * babel-polyfill - 不再使用promise.js，同时也可以在IE上直接使用Promise了

* **工作流涉及技术**

    * vue - 核心功能不解释
    * babel - 支持部份常用的ES6语法
    * babili-webpack-plugin - 支持将ES6压缩混淆
    * sass - 支持scss预编译
    * less - 把sass换成less就好了
    * sprite - 雪碧图自动生成
    * imagemin - 图片自动压缩
    * postcss - 自动添加css浏览器前缀
    * gulp - 处理雪碧图、图片压缩等事务
    * webpack - 处理代码文件监听、打包压缩、HTML自动生成、CSS文件自动抽离
    * cross-env - 处理设置环境变量在不同平台上的差异

## 目录结构

```text
.
|____gulpfile.js - gulp脚本文件，包含图片压缩、雪碧图功能
|____htdocs - 发布根目录，本目录下理论上都是编译生成的
| |____css - 样式输出目录
| | |____common.css webpack插件抽离出来的通用样式
| |____images - 图片输出目录，由gulp对/src/images中的图片压缩输出到此
| | |____favicon.ico - 最好有个网站icon文件
| | |____sprites-common.png - gulp雪碧图自动生成，源目录在/src/sprites/common
| |____index.html - 由/src/pages/index/main.js+template.html生成的页面
| |____js - 脚本输出目录
| | |____common.js - 由webpack抽离出来的通用脚本模块
| | |____index.js - index.html独有的脚本模块
|____package.json - 依赖模块文件
|____postcss.config.js - postcss的配置信息，自动为指定版本的浏览器加上样式前缀
|____readme.md - 说明文件
|____scss.template.handlebars - 雪碧图的模板文件，如果需要less、css等请自行编写
|____src - 源目录，本目录不应该被发布
| |____comp - 通用vue组件目录，比如弹层什么的，它们可能还能够被用到别的站点
| |____conf - 网站配置信息，比如请求地址、store的key之类的都可以在这建文件定义
| | |____cgi.js - 请求地址配置
| |____images - gulp的imagemin会将此目录下的图片压缩输出到htdocs目录下
| | |____favicon.ico - 网站浏览器图标
| |____pages - 存放页面入口目录
| | |_____layout - 站点通用布局vue组件
| | |____index - index.html的页面入口目录
| | | |____main.scss - index.html的样式 
| | | |____main.js - 入口脚本文件，一切从这里开始
| | | |____nav.vue - 导航组件，如果它有子模块也可以用./nav/index.vue来组织，子模块放在./nav中
| | | |____routes.js - 路由配置信息，若是比较复杂也可以用./routes/index.js然后拆分成多个文件来组织
| | | |____store - 页面的vuex状态管理配置，这是拆分后的，规模小的话直接用store.js也是ok的
| | | | |____actions.js
| | | | |____getters.js
| | | | |____index.js
| | | | |____modules.js
| | | | |____mutations.js
| | | | |____state.js
| | | |____template.html - index.html的模板文件
| | | |____views - index.html是个单页面应用，这里是它的三个页面模块
| | | | |____home - 对应着/，它若是有子模块可以放在这里边
| | | | | |____index.vue
| | | | |____post - 对应着/post
| | | | | |____index.vue
| | | | |____user - 对应着/user
| | | | | |____index.vue
| |____sprites - 雪碧图目录，一个子目录就是一个雪碧图
| | |_____common.scss - 由common目录里的png文件生成的scss文件，使用时导入本文件
| | |____common - 名为common的雪碧图目录，输出了./_common.scss以及/htdocs/images/sprites-common.png
| | | |____edit-hover.png - 可以使用 @include sprite($edit-hover)引用
| | | |____edit.png - 可以使用 @include sprite($edit)引用
| |____store - 站点全局vuex状态配置
| | |____actions.js
| | |____getters.js
| | |____index.js
| | |____modules.js
| | |____mutations.js
| | |____state.js
| |____utils - 功能性代码库
| | |____interceptors.js - axios请求过滤器
|____webpack.config.js - webpack脚本

```

## 命令说明

### 启动开发模式

命令：npm run dev | npm run d

* 将/src/images中的图片压缩输出到/htdocs/images
* 构建雪碧图
* 启动webpack-dev-server针对/src/pages的各入口文件做打包工作并监听变化。
* 自动打开浏览器

开发模式不做代码压缩，也不清空缓存。

若是开发过程中图片、雪碧图有变动，请自行运行npm run imagemin或npm run sprites更新。

### 启动watch开发模式

命令：num run watch | npm run w

与npm run dev类似，只是不启用webpack-dev-server，也不自动打开浏览器了。

这个命令主要是为了像我这边有时候还需要跑在php环境上的。

### 启动发布

命令：npm run build | npm run b

执行build构建项目

* 清除imagemin构建时产生的图片cache信息
* 将/src/images中的图片压缩输出到/htdocs/images
* 构建雪碧图
* 启动webpack发布模式构建项目代码

构建命令并不对htdocs目录做任何清除工作，一般来说也不需要清理。

### 图片压缩

命令：npm run imagemin | npm run m

将/src/images中所有图片压缩输出到/htdocs/images中。

### 清除压缩图片缓存

命令: npm run imagecache | npm run c

将图片压缩时生成的缓存文件删除，下次运行图片压缩命令时将全部重新生成，否则会只生成已经修改过的文件

### 雪碧图

源目录: /src/sprites

支持生成多个雪碧图，每个雪碧图需要在/src/sprites中建立一个子目录，比如common。

每个目录都会生成一个对应名字的scss文件，比如/src/sprites/_common.scss，引入该文件即可使用雪碧图。

```scss
@import "../../sprites/common";

test
.icon-edit {
  @include sprite($edit);
}

```

命令会自动生成/htdocs/images/sprites-common.png。

## 开发的那些事儿

### 关于页面

每个页面需要在/src/pages中建立一个目录，比如/index.html则是建立/src/pages/index。

打包脚本会寻找/src/pages/index中的main.js作为入口文件，并以/src/pages/index/template.html为模板在/htdocs下生成一个index.html。

生成的html页面不限于非得/src/pages下，也可以建立一个子目录来归类，比如/src/pages/xxx/mypage，那么将会生成/htdocs/xxx/mypage.html。

若是项目应用了vue-router实现单页面应用，建议所有html文件皆放到htdocs，不要出现有/src/pages/index又有/src/pages/index/mypage的情况，既然都实现单页面了，那么乖乖用路由实现吧。

需要注意，单页面应用未必是整个站点做成一个单页面应用，若是站点规模稍大明显需要使用多个单页面应用来实现，以免代码过于臃肿，比如可以有：

* /src/pages/index
* /src/pages/post

简单来说就是把大的站点划成多个单页面应用，各自管理它们自己的路由。

或者。。干脆就不用vue-router，没人逼你。

### 雪碧图目录

由于考虑到一个站点可能会有多个雪碧图，因此每个雪碧图在/src/sprites下建立一个目录，比如站点通用的雪碧图放在/src/sprites/common，执行npm run sprites时会生成以下两个文件：

* /htdocs/images/sprites-common.png
* /src/sprites/_common.scss

若是应用其它技术，比如less或者直接生成css，则需要修改一下gulpfile.js。

### vuex状态目录

站点通用的状态数据应该放到/src/store中，名字默认为index.js。根据store的规模，可以考虑拆分成多个文件。

若是有不同的状态需求，比如有前台页面以及后台管理系统之分，也可以在里边继续建立子目录，比如：

* /src/store/front
* /src/store/manager

### 通用组件目录

/src/comp目录作为通用组件目录存放。

### 组件存放方式

同样使用import mod from "./mod"的方式导入模块，可以使用./mod.js或者./mod/index.js，具体选择哪种根据该模块的规模。

若是模块较小型，只需要一个文件即可则直接使用mod.js，若是它本身还有其它资源，则可以使用目录的形式。

### 为什么同时使用gulp/webpack

你总不希望webpack -w到一半，正爽着，因为想更新一下图片或者雪碧图不得不按ctrl+c重新来一下吧。。还是另开控制台运行一下npm run imagemin爽啊!

