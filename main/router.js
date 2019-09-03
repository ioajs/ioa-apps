'use strict';

const { router, middleware } = require('@app');

const { auth } = middleware;

router.get('/', auth.verify, 'home.index');

router.post('/login', 'home.login');

router.get('/news', 'news.home');

router.get('/news/:id/details/:kk', 'news.details');

router.get('/sms/:id/sd/:kk', 'home.sms');

router.post('/sms/:id/sd/:kk', 'home.sms');

////////// REST路由 ////////////

// 模糊匹配路由，泛解析，通用模型控制器
router.resources('/rest/:name', 'rest');

// router.get('/rest/123', 'rest.123');