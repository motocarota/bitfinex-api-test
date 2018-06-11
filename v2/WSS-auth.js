const { connect, message, auth } = require('../WSS-v2')

function cb (wss) {
  auth(
    wss,
    [
      0,
      "ox_multi",
      null,
      [
        [
          "on",
          null,
          {
            "cid":13734400,
            "type":"LIMIT",
            "symbol":"tETCUSD",
            "amount":"-18.039687",
            "price":"16.737",
            "hidden":0,
            "postonly":1
          }
        ]
      ]
    ]
  )
}

const wss = connect(cb)
