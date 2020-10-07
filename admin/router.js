'use strict';

const { router, middleware } = require('@app');

const { test } = middleware;

router.get('/admin', test, 'home.index')

router.get('/admin/:id', 'home.details')

router.post('/admin', 'home.add')

router.put('/admin/:id', 'home.update')

router.delete('/admin/:id', 'home.delete')
