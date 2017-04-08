# Vue项目说明

简单看看，别强迫症~喜欢改成啥样就啥样，搞砸了是自己的事

对了，用这套东西之前请先学一下Vue全家桶，至少知道怎么用npm装依赖吧！

## 相关技术说明

* **前台涉及技术**
    
    * vue
    * vuex
    * vue-router - 路由功能
    * axios - 取代vue-resource，用于发送ajax请求
    * mockjs - 拦截ajax请求，自造假数据
    * promise.js - 支持ES6的Promise
    
* **工作流涉及技术**

    * vue - 核心功能不解释
    * babel - 支持部份常用的ES6语法
    * babili-webpack-plugi - 支持将ES6压缩混淆
    * sass - 支持scss预编译
    * less - 把sass换成less就好了
    * sprite - 雪碧图自动生成
    * imagemin - 图片自动压缩
    * postcss - 自动添加css浏览器前缀
    * gulp - 处理雪碧图、图片压缩等事务
    * webpack - 处理代码文件监听、打包压缩、HTML自动生成、CSS文件自动抽离

## 目录结构

* htdocs - 网站根目录，编译输出目录

    * css - 网站样式目录，编译生成
    * images - 网站图片目录，编译生成
    * js - 网站脚本目录，编译生成
    
* src - 网站源目录

    * conf - 站点配置信息，比如cgi请求地址 
    * images - 未经压缩的图片目录
    * lib - 通用逻辑目录，用于封装一些通用的逻辑性代码
    * pages - 页面入口目录
    * sprites - 雪碧图目录
    * store - 站点通用store
    * ui - 站点通用VUE组件
    
* gulpfile.js - gulp脚本文件
* package.json - npm依赖文件
* postcss.config.js - postcss-loader的配置文件
* readme.md - 说明文件
* scss.template.handlebars - 雪碧图模板文件
* webpack.config.js - webpack脚本

### htdocs

一般来说不应该在这里放置任何东西，该目录的内容应该是编译生成的。

### 页面入口目录

每个页面应该在pages下建立一个独有的目录，比如index目录。页面入口目录必须拥有main.js、template.html，否则它将不会生成对应的html页面。

/pages/index目录将会生成/htdocs/index.html，并加载相应的css、js代码。

页面入口目录下一般来store目录（或store.js）用来放置当前页面的store信息。

若是单页面应用则还会有routes目录（或routes.js）放置路由信息，同时属于该页面的路由需要放到views目录下，同时也建立对应的目录，比如/pages/index/views/home。

/pages/index/views/home目录下除了index.vue作为入口模块之外，其它独属的模块也可以放里边。

一个站点未必一定要是一个单页面，它也可以由多个单页面应用组件，比如可以有：

/src/pages/index
/src/pages/post

简单来说就是把大的站点划成多个单页面应用，各自管理它们自己的路由。

或者。。干脆就不用vue-router，没人逼你。

### 雪碧图目录

由于考虑到一个站点可能会有多个雪碧图，因此每个雪碧图在/src/sprites下建立一个目录，比如前台展示页面的雪碧图放在/src/sprites/front，执行npm run sprites时会生成以下两个文件：

* /htdocs/images/sprites-front.png
* /src/sprites/_front.scss

若是应用其它技术，比如less或者直接生成css，则需要修改一下gulpfile.js。

### vuex状态目录

vuex状态文件应该放置在/src/store中，名字默认为index.js。由于本demo有前台、后台两个互相独立的页面状态需要管理，因此在/src/store下建立了两个目录分开存放 。

store可以根据规模决定是否直接使用一个文件(比如/src/store/index.js)或是像本demo一般拆开多个文件于index.js中导入。

### 通用组件目录

/src/ui目录作为通用组件目录存放，比如站点通用的header、footer之类的。

由于本demo前后台组件风格基本独立，许多通用的组件各自放到对应的页面入口目录下。

### 组件存放方式

同样使用import mod from "./mod"的方式导入模块，可以使用./mod.js或者./mod/index.js，具体选择哪种根据该模块的规模。

若是模块较小型，只需要一个文件即可则直接使用mod.js，若是它本身还有其它资源，则可以使用目录的形式。

## 命令说明

### 启动开发模式

命令：npm run dev

* 将/src/images中的图片压缩输出到/htdocs/images
* 构建雪碧图
* 启动webpack针对/src/pages的各入口文件做打包工作并监听变化。

开发模式不做代码压缩，也不清空缓存。

若是开发过程中图片、雪碧图有变动，请自行运行npm run imagemin或npm run sprites更新。

### 启动发布

命令：npm run build

执行build构建项目

* 清除imagemin构建时产生的图片cache信息
* 将/src/images中的图片压缩输出到/htdocs/images
* 构建雪碧图
* 启动webpack发布模式构建项目代码

构建命令并不对htdocs目录做任何清除工作，一般来说也不需要清理。

### 图片压缩

命令：npm run imagemin

将/src/images中所有图片压缩输出到/htdocs/images中。

### 清除压缩图片缓存

命令: npm run imagecache

将图片压缩时生成的缓存文件删除，下次运行图片压缩命令时将全部重新生成，否则会只生成已经修改过的文件

### 雪碧图

源目录: /src/sprites

支持生成多个雪碧图，每个雪碧图需要在/src/sprites中建立一个子目录，比如front。

每个目录都会生成一个对应名字的scss文件，比如/src/sprites/_front.scss，引入该文件即可使用雪碧图。

```scss
@import "../../sprites/front";

test
.icon-edit {
  @include sprite($edit);
}

```


