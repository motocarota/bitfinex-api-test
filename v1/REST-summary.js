const lib = require('../REST-v1.js')

lib.post({
  url: 'summary'
})

// Summary
// Returns a 30-day summary of your trading volume and return on margin funding.
//
// {
//   "trade_vol_30d":[
//     {"curr":"BTC","vol":11.88696022},
//     {"curr":"LTC","vol":0.0},
//     {"curr":"ETH","vol":0.1},
//     {"curr":"Total (USD)","vol":5027.63}
//   ],
//   "funding_profit_30d":[
//     {"curr":"USD","amount":0.0},
//     {"curr":"BTC","amount":0.0},
//     {"curr":"LTC","amount":0.0},
//     {"curr":"ETH","amount":0.0}
//   ],
//   "maker_fee":0.001,
//   "taker_fee":0.002
// }
//
// response detail
// Key                  Type        Description
// trade_vol_30d        [string]    Trading volumes for any currency for the last 30 days
// funding_profit_30d   [string]    Funding profits for any currency for the last 30 days
// maker_fees           [decimal]   Your current fees for maker orders (limit orders not marketable, in percent)
// taker_fees           [decimal]   Your current fees for taker orders (marketable order, in percent)
