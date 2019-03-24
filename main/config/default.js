module.exports = {
   port: 8500,
   "@apps": {
      "model": {
         "host": "localhost",
         "port": 5432,
         "database": "test",
         "username": "postgres",
         "password": "postgres",
         "logger": true
      },
      "auth": {
         "authKey": "test"
      }
   }
}