'use strict'

const { Sequelize, sequelize } = require('ioa')

const { STRING } = Sequelize

const model = sequelize.define('user', {
   'phoneNumber': {
      name: '手机号',
      type: STRING,
      allowNull: false,
   },
   'username': {
      name: '用户名',
      type: STRING,
   },
   'email': {
      name: '邮箱',
      type: STRING,
   },
   "headPortrait": {
      name: '头像',
      type: STRING,
   }
})

// model.sync({ force: true })

module.exports = model