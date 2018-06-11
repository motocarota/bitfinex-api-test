const lib = require('../REST-v2.js')

lib.post(
  'v2/auth/calc/order/avail',
  {
    symbol: 'tBTCUSD',
    dir: 1,
    rate: 1,
    type: 'exchange'
  },
  {}
)