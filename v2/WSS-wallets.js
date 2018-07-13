const lib = require('../WSS-v2.js')

const msg = [
  0,
  "calc",
  "null",
  [
    ["wallet_margin_BTC"],
    ["wallet_funding_USD"]
  ]
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
