const lib = require('../REST-v2.js')

lib.post({
  url: 'auth/r/ledgers/USD/hist',
  body: {},
  params: {
    limit:'500',
    end:'1529297520000'
  }
})
