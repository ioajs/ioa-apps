'use strict';

module.exports = {
   "@ioa/koa": {
      port: 8500,
   },
   "@ioa/auth": {
      "password": "test"
   },
   "@ioa/model": {
      "host": "localhost",
      "port": 5432,
      "database": "test",
      "username": "postgres",
      "password": "postgres",
      "logger": true
   },
}