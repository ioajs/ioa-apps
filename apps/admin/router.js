'use strict';

const app = require('ioa')

const { test, intercept } = app.middleware

app.get('/admin', test, 'index.index')

app.get('/admin/:id', 'index.details')

app.post('/admin', 'index.add')

app.put('/admin/:id', 'index.update')

app.delete('/admin/:id', 'index.delete')