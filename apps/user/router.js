'use strict';

let { router, middleware } = require('ioa')

const { test, intercept } = middleware

router.get('/user', test, 'index.home')

router.get('/user/news', test, 'news.details')

router.get('/user/intercept', intercept, 'news.details')