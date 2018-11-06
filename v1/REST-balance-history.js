const lib = require('../REST-v1.js')

lib.post({
  url: 'history',
  params: {
    currency: "BTCUSD",
    since: 1537426800,
    until: 1539586800,
    limit: 100,
    wallet: 'deposit', // 'trading', 'exchange'
  },
})