const crypto = require('crypto')
const request = require('request')
const utils = require ('./utils.js')
const {
  getRestURL,
  getApiKeys,
  toQueryString,
  printResponse
} = utils

// Public Endpoints (GET)
function publicMessage ({ url, params = {} }) {
  const completeURL = `${getRestURL()}/${url}`
  const queryString = toQueryString(params)

  // DEBUG
  console.log('url:', completeURL)
  console.log('params:', JSON.stringify(params, 0, 2))
  console.log('query string:', queryString)

  const options = {
    url: `${completeURL}${queryString}`
  }

  return request.get(
    options,
    printResponse
  )
}

function authMessage (args = {}) {
  const {
    url,
    body = {},
    params = {}
  } = args
  const {
    apiKey = '',
    apiSecret = ''
  } = getApiKeys()

  const baseUrl = getRestURL({ version: 2 })
  const nonce = JSON.stringify(Date.now().toString() * 1000)
  const rawBody = JSON.stringify(body)
  const queryString = toQueryString(params)
  const signatureUrl = `/api/v2/${url}/${nonce}${rawBody}`
  const hmac = crypto.createHmac('sha384', apiSecret).update(signatureUrl)
  const signature = hmac.digest('hex')

  const completeURL = `${baseUrl}/${url}/${queryString}`

  // DEBUG
  console.log('signature url:', signatureUrl) // completeURL
  console.log('body:', JSON.stringify(body, 0, 2))
  console.log('nonce:', nonce)
  console.log('signature:', signature)

  const options = {
    url: completeURL,
    headers: {
      'bfx-nonce': nonce,
      'bfx-apikey': apiKey,
      'bfx-signature': signature
    },
    json: body
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
