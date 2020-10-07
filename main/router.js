'use strict';

const { router, middleware } = require('@app');

const { verify } = middleware;

router.get('/', verify, 'home.index');

router.post('/login', 'home.login');

router.get('/news', 'news.home');

router.get('/news/:id/details/:kk', 'news.details');

router.get('/sms/:id/sd/:kk', 'home.sms');

router.post('/sms/:id/sd/:kk', 'home.sms');

////////// REST路由 ////////////

// get、post、put、delete 的快捷方式
router.resources('/rest/:name', 'rest');

// router.get('/rest/123', 'rest.123');
