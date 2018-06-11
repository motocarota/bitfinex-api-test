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

function authMessage ({ url, body, params }) {
  const { apiKey = '', apiSecret = '' } = getApiKeys()
  const baseUrl = getRestURL()
  const nonce = Date.now().toString() * 1000
  const rawBody = JSON.stringify(body)
  const queryString = toQueryString(params)
  const signature = crypto
    .createHmac('sha384', apiSecret)
    .update(`/api/${url}${nonce}${rawBody}`)
    .digest('hex')

  const completeURL = `${baseUrl}/${url}${queryString}`

  // DEBUG
  console.log('url:', completeURL)
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
