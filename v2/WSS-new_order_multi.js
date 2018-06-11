const lib = require('../WSS-v2.js')

const msg = [
  0,
  "ox_multi",
  null,
  [
    [
      "on",
      {
        "gid": 1515266207845,
        "type": "LIMIT",
        "symbol": "tBTCUSD",
        "hidden": 0,
        "amount": "0.5",
        "price": "16217"
      }
    ],
    [
      "on",
      {
        "gid": 1515266207845,
        "type": "LIMIT",
        "symbol": "tBTCUSD",
        "hidden": 0,
        "amount": "-0.5",
        "price": "17393"
      }
    ]
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