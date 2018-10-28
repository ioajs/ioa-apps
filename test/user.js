'use strict';

const test = require('jtf')
const { axios } = require('./helpers')

test('get /user', async t => {
   let { data } = await axios.get("/user")
   t.deepEqual('user home', data)
})

test('get /user/news', async t => {
   let { data } = await axios.get("/user/news")
   t.deepEqual({ "params": {}, "body": "news details" }, data)
})