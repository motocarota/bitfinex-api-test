const lib = require('../REST-v1.js')

lib.post({
  url: 'v1/order/new', 
  body: {
    "exchange": "bitfinex",
    "symbol":"BTCUSD",
    "amount":"60",
    "price":"123.45",
    "side":"sell",
    "type":"exchange limit",
    "ocoorder":false,
    "use_all_available": "1",
    "is_postonly": true
  }
})
