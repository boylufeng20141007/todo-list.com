/**
 * @description 应用程序启动文件
 * @author lux.lu
 * @date 2016-10-20
 */

var http   = require('http');
var koa    = require('koa');
var app    = koa();
var router = require('koa-router')();

var koaViews = require('koa-views');
var coViews  = require('co-views');

var port   = 9999;
//var error  = require('./application/exception/error');

var colors = require('colors');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

//co-views
var render = coViews('./static/src/page', {
    map: {
        html: 'ejs'
    }
});

//koa-views
/*
app.use(koaViews(__dirname + './static/src/page'), {
    map: {
        html: 'ejs'
    }
});
*/

app
    .use(router.routes())
    .use(router.allowedMethods())
    .use(function *(){
        this.body = "Hello World!";
    });

http.createServer(app.callback()).listen(port);


/**
 * 加载路由
 * @return
 */
function loadRouter(){
    require('./application/controller/router')(router, render);
}
loadRouter();

/*
app.on('error', function(err){
    console.log('========================================= 抛异常 start ================================================');
    console.log(err.error);
    console.log('========================================= 抛异常 end ==================================================');
});
*/

//捕获异常错误，避免进程挂掉
process.on('uncaughtException', function (exception) {
    console.log('========================================= 抛异常 start ================================================'.error);
    console.log(JSON.stringify(exception).error);
    console.log('========================================= 抛异常 end =================================================='.error);
});
