/**
 * @description 应用程序启动文件
 * @author lux.lu
 * @date 2016-10-20
 */

var http = require('http');
var koa  = require('koa');
var app  = koa();

var port = 6789;

http.createServer(app.callback()).listen(port);
