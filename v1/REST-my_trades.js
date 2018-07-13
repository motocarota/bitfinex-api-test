const lib = require('../REST-v1.js')

lib.post({
  url: 'mytrades',
  params: {
    symbol: 'BTCUSD'
  }
})