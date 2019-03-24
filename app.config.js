'use strict';

module.exports = {
   "@ioa/http": {
      "enable": true,
      options(ioa, options) {
         Object.assign(ioa.options, options);
      }
   },
   "@ioa/auth": {
      "enable": true,
   },
   "@ioa/model": {
      "enable": true
   },
   "./component/admin": {
      "enable": true
   },
   "./component/user": {
      "enable": true
   },
}