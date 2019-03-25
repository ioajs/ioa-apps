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

model.role = {
   admin: {
      find: {
         where: ['uid'],
      },
      create: {
         where: ['uid'],
      },
      update: {
         where: ['uid'],
      },
      destroy: {
         where: ['uid'],
      },
   },
   user: {
      find: {
         // where: ['uid'],
      }
   },
   tourist: {
      find: {
         where: [],
      }
   }
}

// model.sync({ force: true })

module.exports = model;