'use strict';

const { router, middleware } = require('@app');

const { test, intercept } = middleware;

router.get('/user', test, 'home.index')

router.get('/user/news', test, 'news.details')

router.get('/user/intercept', intercept, 'news.details')
