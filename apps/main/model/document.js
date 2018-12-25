'use strict';

const { Sequelize, sequelize } = require('@app')
const { STRING, INTEGER, JSONB, BIGINT } = Sequelize

const model = sequelize.define('document', {
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
   admin:{
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
   user:{
      find: {
         // where: ['uid'],
      }
   },
   tourist:{
      find: {
         where: [],
      }
   }
}

// model.sync({ force: true })

module.exports = model