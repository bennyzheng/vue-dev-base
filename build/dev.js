let imagemin = require('./imagemin');
let spritesmith = require('./spritesmith');
let webpackDevServer = require('./webpackDevServer');
process.env.NODE_ENV = 'dev';

imagemin()
    .then(spritesmith)
    .then(webpackDevServer)
    .catch(error => {
        console.log(error);
    });


