'use strict';

const test = require('jtf')
const axios = require('axios')

axios.defaults.baseURL = 'http://localhost:8600';

test('get', async t => {
   const { data } = await axios.get("/admin")
   t.deepEqual(data, 'admin index')
});

test('get details', async t => {
   const { data } = await axios.get("/admin/999")
   t.deepEqual(data, 'admin details')
});

test('post', async t => {
   const body = { xx: 666 }
   const { data } = await axios.post("/admin", body)
   t.deepEqual(data, 'admin add')
});


test('put', async t => {
   const { data } = await axios.put("/admin/55", {})
   t.deepEqual(data, 'admin update')
});

test('delete', async t => {
   const { data } = await axios.delete("/admin/55", {})
   t.deepEqual(data, 'admin delete')
});