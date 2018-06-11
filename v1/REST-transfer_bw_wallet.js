const lib = require('../REST-v1.js')

lib.post({
  url: 'v1/transfer', 
  body: {
    amount: "3",
    currency: "USD",
    walletfrom: "exchange",
    walletto: "margin"
  }
})
