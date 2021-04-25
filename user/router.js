import ioa from 'ioa';

const { router, middleware } = ioa.app;

const { test, intercept } = middleware;

router.get('/user', test, 'home.index')

router.get('/user/news', test, 'news.details')

router.get('/user/intercept', intercept, 'news.details')
