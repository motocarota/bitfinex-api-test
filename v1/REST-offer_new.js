const lib = require('../REST-v1.js')

lib.post({
  url: 'v1/offer/new', 
  params: {
    "currency": "USD",
    "amount": "383.9",
    "rate": "0.05",
    "period": 30,
    "direction": "lend"
  }
})
