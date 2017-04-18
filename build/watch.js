let imagemin = require('./imagemin');
let spritesmith = require('./spritesmith');
let webpack = require('./webpack.watch');

process.env.NODE_ENV = 'watch';

imagemin()
    .then(spritesmith)
    .then(webpack)
    .catch(error => {
        console.log(error);
    });


