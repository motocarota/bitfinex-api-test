const lib = require('../REST-v1.js')

lib.post({
  url: 'v1/transfer', 
  params: {
    "amount": "3",
    "currency": "USD",
    "walletfrom": "exchange",
    "walletto": "trading"
  }
})
