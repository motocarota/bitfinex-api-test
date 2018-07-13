const lib = require('../REST-v1.js')

lib.post({
  url: 'transfer', 
  params: {
    "amount": "3",
    "currency": "USD",
    "walletfrom": "exchange",
    "walletto": "trading"
  }
})
