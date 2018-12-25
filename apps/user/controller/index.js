const app = require('@app')

class index {
   home(ctx) {
      ctx.body = 'user home'
   }
}

module.exports = index