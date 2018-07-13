const lib = require('../REST-v1.js')

lib.post({
  url: 'deposit/new',
  body: {
    "method": "eos",
    "wallet_name": "exchange",
    "renew": 1
  }
})
