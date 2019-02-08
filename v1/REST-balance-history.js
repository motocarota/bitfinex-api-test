const lib = require('../REST-v1.js')

lib.post({
  url: 'history',
  body: {
    currency: "USD",
    since: 1541778600,
    until: 1541778699,
    limit: 100,
    wallet: 'deposit', // 'trading', 'exchange'
  },
})