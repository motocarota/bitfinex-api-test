const lib = require('../REST-v1.js')

lib.post({
  url: 'order/new/multi', 
  params: {
    orders: [
      {
        symbol: "btcusd",
        amount: 10,
        price: 1,
        exchange: "bitfinex",
        side: "buy",
        type: "market"
      }
    ]
  }
})
