'use strict';

let { router, middleware } = require('@app')

const { test, intercept } = middleware

router.get('/admin', test, 'index.index')

router.get('/admin/:id', 'index.details')

router.post('/admin', 'index.add')

router.put('/admin/:id', 'index.update')

router.delete('/admin/:id', 'index.delete')