let cleaniamgecache = require("./cleanimagecache");
let imagemin = require('./imagemin');
let spritesmith = require('./spritesmith');
let webpack = require('./webpack.build');

process.env.NODE_ENV = 'production';

cleaniamgecache()
    .then(imagemin)
    .then(spritesmith)
    .then(webpack)
    .catch(error => {
        console.log(error);
    });


