'use strict';

const ioa = require('ioa');

ioa.loader({
   "./main": {
      "enable": true,
      "components": {
         "@ioa/http": {
            "enable": true
         },
         "@ioa/model": {
            "enable": true,
         },
         "@ioa/auth": {
            "enable": true,
         },
      },
   },
   "./component/admin": {
      "enable": true,
      "components": {
         "@ioa/http": {
            "enable": true
         },
         "@ioa/model": {
            "enable": true,
         },
         "@ioa/auth": {
            "enable": true,
         },
      },
   },
   "./component/user": {
      "enable": true,
      "components": {
         "@ioa/http": {
            "enable": true
         },
         "@ioa/model": {
            "enable": true,
         },
         "@ioa/auth": {
            "enable": true,
         },
      },
   },
});