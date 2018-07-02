const lib = require('../REST-v2.js')

// hist pair
lib.post({
  url: 'auth/r/orders/tBTCUSD/hist',
  params: {
    limit: 2,
    end: null
  }
})

// hist all
lib.post({
  url: 'auth/r/orders/hist',
  params: {
    limit: 2,
    end: null
  }
})