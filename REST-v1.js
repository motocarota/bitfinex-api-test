const crypto = require('crypto')
const request = require('request')
const utils = require ('./utils.js')
const {
  getBaseURL,
  getApiKeys,
  toQueryString,
  printResponse
} = utils

// Public Endpoints (GET)
function publicMessage (args = {}) {
  const { url, params = {} } = args
  const completeURL = `${getBaseURL()}/${url}`
  const queryString = toQueryString(params)

  console.log('completeUrl:', completeURL)
  console.log('params:', JSON.stringify(params, 0, 2))

  const options = {
    url: `${completeURL}${queryString}`
  }

  return request.get(
    options,
    printResponse
  )
}

// Private Endpoints (POST with signing)
function authMessage ({ url, body = {}, params = {} }) {
  const { apiKey = '', apiSecret = '' } = getApiKeys()
  const nonce = '' + (Date.now() * 1000)
  const completeURL = `${getRestURL()}/${url}`
  const data = Object.assign(
    {},
    {
      request: `/${url}`,
      nonce
    },
    body
  )
  const payload = new Buffer(JSON.stringify(data)).toString('base64')
  const queryString = toQueryString(params)
  const signature = crypto
    .createHmac('sha384', apiSecret)
    .update(payload)
    .digest('hex')

  // DEBUG
  console.log('completeUrl:', completeURL)
  console.log('params:', JSON.stringify(params, 0, 2))
  console.log('body:', JSON.stringify(body, 0, 2))
  console.log('data:', JSON.stringify(data, 0, 2))
  console.log('nonce:', nonce)
  // console.log('payload:', JSON.stringify(payload, 0, 2))
  // console.log('signature:', signature)

  const options = {
    url: `${completeURL}${queryString}`,
    headers: {
      'X-BFX-APIKEY': apiKey,
      'X-BFX-PAYLOAD': payload,
      'X-BFX-SIGNATURE': signature
    },
    body: JSON.stringify(body)
  }

  return request.post(
    options,
    printResponse
  )
}

module.exports = {
  get: publicMessage,
  post: authMessage
}
