'use strict';

module.exports = {
   "components": {
      "@ioa/koa": {
         port: 8500,
      },
      "@ioa/model": {
         "host": "localhost",
         "port": 5432,
         "database": "test",
         "username": "postgres",
         "password": "postgres",
         "logger": true
      },
      "@ioa/auth": {
         "authKey": "test"
      }
   }
}