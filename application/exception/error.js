/**
 * @description 错误处理
 * @author lux.lu
 * @date 2016-10-21
 */

'use strict';

//var colors = require('colors');
require('../utils/utils');

var error = function(app) {
    app.on('error', function(err) {
        console.log('-------- err ---------');
        console.log(JSON.stringify(err).error);
        console.log('-------- err ---------');
    });

    //捕获异常错误，避免进程挂掉
    /*process.on('uncaughtException', function (exception) {
        console.log('========================================= 抛异常 start ================================================');
        console.log(exception);
        console.log('========================================= 抛异常 end ==================================================');
    });
*/
};

module.exports = {
    error: error
};
