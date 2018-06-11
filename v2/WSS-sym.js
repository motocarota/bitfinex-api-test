const lib = require('../WSS-v2.js')

const msg = {
  "event": "subscribe",
  "channel": "sym",
  "symbol": "tBTCUSD"
}

function cb (wss) {
  lib.message(wss, msg)
}
const wss = lib.connect(cb)
