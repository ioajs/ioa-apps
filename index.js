'use strict';

const ioa = require('ioa');

const components = {
   "@ioa/koa": true,
   "@ioa/model": true,
   "@ioa/auth": true,
}

ioa.loader({
   "./main": {
      "enable": true,
      components,
   },
   "./admin": {
      "enable": true,
      components,
   },
   "./user": {
      "enable": true,
      components,
   },
});