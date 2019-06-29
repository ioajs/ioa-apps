'use strict';

const app = require('@app');

const { Ormv, ormv } = app;

const { string, integer, jsonb, } = Ormv.Type;

const model = ormv.define('document', {
   'title': {
      name: '标题',
      type: string,
      allowNull: false,
   },
   'document': {
      name: 'markdown文档',
      type: string,
      allowNull: false,
   }
})

// model.sync()

module.exports = model;