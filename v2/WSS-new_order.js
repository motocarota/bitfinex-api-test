const lib = require('../WSS-v2.js')

const msg = [
  0,
  "on",
  null,
  {
    "gid": 1,
    "cid": 12345,
    "type": "LIMIT",
    "symbol": "tBTCUSD",
    "amount": "1.0",
    "price": "500",
  }
]

function cb (wss) {
  lib.auth(wss, {})
  setTimeout(
    function () {
      lib.message(wss, msg)
    },
    1000
  )
}
const wss = lib.connect(cb)
