module.exports = {
  ping: () => ({ event: 'ping' }),
  ticker: (symbol = 'tBTCUSD') => ({
    "event": "subscribe",
    "channel": "ticker",
    "symbol": symbol
  }),
  trades: (symbol = 'tBTCUSD') => ({
    "event": "subscribe",
    "channel": "trades",
    "symbol": symbol
  }),
  books: ({ symbol = 'tBTCUSD', prec = 'P0', freq = 'F0', len = 25 }) => ({
    "event": "subscribe",
    "channel": "book",
    "symbol": symbol,
    "prec": prec,
    "freq": freq,
    "len": len
  }),
  rawBooks: ({ pair = 'tBTCUSD', prec = "R0" }) => ({
    "event": "subscribe",
    "channel": "book",
    "pair": pair,
    "prec": prec
  }),
  candles: ({ tf = '1m', pair = 'tBTCUSD' }) => ({
    "event": "subscribe",
    "channel": "candles",
    "key": "trade:"+tf+":"+pair
  }),
  unsubscribe: (chanId = 0) => ({
    "event": "unsubscribe",
    "chanId": chanId
  }),
  conf: (flags = 635536) => ({ 
    event: "conf", 
    flags: flags
    // DEC_S 8 Enable all decimal as strings.
    // TIME_S 32 Enable all times as date strings.
    // SEQ_ALL 65536 Enable sequencing *BETA FEATURE*
  }),
  newOrder: () => (
    // example on docs
    [
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
        "hidden": 0
      }
    ]
    // ivan lau
    // [
    //   0,
    //   "on",
    //   null,
    //   {
    //     "gid":1733002401,
    //     "cid":14954217498831188,
    //     "type":"EXCHANGE LIMIT",
    //     "symbol":"tBTCUSD",
    //     "amount":'-0.01',
    //     "price":2100,
    //     "hidden":1
    //   }
    // ]
  ),
  cancelOrder: (args = {}) => {
    const { id, cid, cid_date } = args
    return (
      [
        0,
        "oc",
        null,
        {
          // Cancel order by internal order Id
          "id": id,
          // Cancel order using client order Id and order creation date
          "cid": cid,
          "cid_date": cid_date
        }
      ]
    )
  },
  // ids = [ID, ...]
  // cids = [ [ ID, CID_DATE ], ... ]
  // gids = [ [ GID, <ID_MAX>], ... ]
  cancelOrderMulti: (args = {}) => {
    const { ids, cids, gids } = args
    return (
      [
        0,
        "oc_multi",
        null,
        {
          "id": ids,
          "cid": cids,
          "gid": gids
        }
      ]
    )
  },
  orderMultiOp: (...list) => (
    [
      0,
      "ox_multi",
      null,
      [
        ...list
      ]
    ]
  )
}