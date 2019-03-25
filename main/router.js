'use strict';

let { router, middleware } = require('@app')

const { role, auth } = middleware;

router.get('/', role('admin', 'user', 'tourist'), 'home.index')

router.post('/login', 'home.login')

router.get('/news', role('user', 'tourist'), 'news.home')

router.get('/news/:id/details/:kk', role('user', 'tourist'), 'news.details')

router.get('/sms/:id/sd/:kk', role('user', 'tourist'), 'home.sms')

router.post('/sms/:id/sd/:kk', role('user', 'tourist'), 'home.sms')

////////// REST路由 ////////////

// 模糊匹配路由，泛解析，通用模型控制器
router.resources('/rest/:name', 'rest')

// router.get('/rest/123', 'rest.123')