'use strict';

const test = require('jtf');
const axios = require('axios');

test('get /user', async t => {
   const { data } = await axios.get("/user")
   t.deepEqual('user home', data)
})

test('get /user/news', async t => {
   const { data } = await axios.get("/user/news")
   t.deepEqual({ "params": {}, "body": "news details" }, data)
})