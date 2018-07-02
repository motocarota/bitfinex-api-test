const lib = require('../REST-v2.js')

lib.post({
  url: 'auth/calc/order/avail',
  body: {
    symbol: 'tBTCUSD',
    dir: 1,
    rate: 1,
    type: 'exchange'
  }
})