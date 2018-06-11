const lib = require('../REST-v1.js')

lib.post({
  url: 'v1/mytrades',
  params: {
    symbol: 'BTCUSD'
  }
})