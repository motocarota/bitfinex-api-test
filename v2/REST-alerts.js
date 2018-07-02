const lib = require('../REST-v2.js')

lib.post({
  url: 'auth/r/alerts',
  body: {},
  params: {
    type: 'price'
  }
})