'use strict';

const app = require('@app');

app.on('@ioa/config');
app.on('@ioa/koa');
app.on('@ioa/ormv');
app.on('@ioa/auth');

// app.loader({
//    middleware: false
// })