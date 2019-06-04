'use strict';

const ioa = require('ioa');

ioa.loader({
   "./main": {
      "enable": true,
      "components": {
         "@ioa/koa": {
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
   "./admin": {
      "enable": true,
      "components": {
         "@ioa/koa": {
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
   "./user": {
      "enable": true,
      "components": {
         "@ioa/koa": {
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