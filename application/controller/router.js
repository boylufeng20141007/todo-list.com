/**
 * @description 路由
 * @author lux.lu
 * @date 2016-10-21
 */

'use strcit';

var Router = function(router, render){
    router.get('/index.html', function *(next){
        /*
        this.status = 200;
        this.type = 'text/html; charset=utf-8';
        this.body = '<strong style="color:red;">xxx</strong>';
        */
        this.body = yield render('index/index', {});
    });
};

module.exports = Router;
