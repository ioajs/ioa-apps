'use strict';

module.exports = {
   port: 8500,
   "components": {
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