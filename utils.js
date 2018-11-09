var { HmacSHA384, enc } = require('crypto-js')

function getConfig () {
  return {
    apiKey: process.env[ 'BFX_API_KEY' ] || '-',
    apiSecret: process.env[ 'BFX_API_SECRET' ] || '-',
    baseURL: process.env[ 'BFX_API_URL' ] || 'api.bitfinex.com'
  }
}

function getApiKeys() {
  const conf = getConfig()
  return {
    apiKey: conf.apiKey,
    apiSecret: conf.apiSecret
  }
}

function getRestURL (args = {}) {
  const { version = 2 } = args
  const { baseURL } = getConfig()
  
  return `https://${baseURL}/v${version}`
}

function getWssURL (version = 2) {
  const { baseURL } = getConfig()

  switch(+version) {
    case 2: {
      return `wss://${baseURL}/ws/2`
    }
    case 1:
    case 1.1: {
      return `wss://${baseURL}/ws`
    }
    default: {
      console.error('unknown version', version)
      return null
    }
  }
}

function toQueryString (json = {}) {
  const keys = Object.keys(json)
  if (!keys.length) {
    return ''  
  }
  const params = keys.map(
    (key) => `${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`
  )

  return `?${params.join('&')}`
}

// wss
const generateAuth = (args = {}) => {
  const {
    apiKey = '',
    apiSecret = '',
    version = '2.0',
    calc = 0
  } = args
  const nonce = Date.now() * 1000
  let payload = {
    apiKey,
    event: 'auth',
    authPayload: 'AUTH' + nonce,
    calc
  }

  if (version === '2.0') {
    payload.authNonce = +nonce
  } else {
    console.warn('Only wss v2 is now supported, sorry!')
    return {}
  }
  payload.authSig = HmacSHA384(payload.authPayload, apiSecret).toString(enc.Hex)

  return payload
}

function printResponse (error, response, body) {
  const output = body || response
  if (error) {
    console.log('response (error)', error)
  }
  try {
    const j = JSON.parse(output)
    console.log('response (json):', JSON.stringify(j, 0, 2))
  } catch (err) {
    console.log('response (raw):', output)
  }
}

module.exports = {
  getConfig,
  getApiKeys,
  getRestURL,
  getWssURL,
  generateAuth,
  toQueryString,
  printResponse,
}