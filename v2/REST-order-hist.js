const lib = require('../REST-v2.js')

// hist pair
lib.post(
  'v2/auth/r/orders/tBTCUSD/hist',
  {},
  {
    limit: 2,
    end: null
  }
)

// hist all
lib.post(
  'v2/auth/r/orders/hist',
  {},
  {
    limit: 2,
    end: null
  }
)