'use strict';

const app = require('@app');

const { ormv } = app;

const model = ormv.model('document', {
   'title': {
      name: '标题',
      type: 'string',
      allowNull: false,
   },
   'document': {
      name: 'markdown文档',
      type: 'string',
      allowNull: false,
   }
})

// model.sync()

module.exports = model;