'use strict';

const app = require('@app');

const { Ormv, ormv } = app;

const { STRING, INTEGER, JSONB, BIGINT } = Ormv.Type;

const model = ormv.define('document', {
   'title': {
      name: '标题',
      type: STRING,
      allowNull: false,
   },
   'document': {
      name: 'markdown文档',
      type: STRING,
      allowNull: false,
   }
})

// model.sync()

module.exports = model;