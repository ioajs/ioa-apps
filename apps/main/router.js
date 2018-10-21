'use strict';

const app = require('ioa')

const { role, auth } = app.middleware

app.get('/', role('admin', 'user', 'tourist'), 'index.home')

app.post('/login', 'index.login')

app.get('/news', role('user', 'tourist'), 'news.home')

app.get('/news/:id/details/:kk', role('user', 'tourist'), 'news.details')

app.get('/sms/:id/sd/:kk', role('user', 'tourist'), 'index.sms')

app.post('/sms/:id/sd/:kk', role('user', 'tourist'), 'index.sms')

////////// REST路由 ////////////

// 模糊匹配路由，泛解析，通用模型控制器
app.resources('/rest/:name', 'rest')

// app.get('/rest/123', 'rest.123')