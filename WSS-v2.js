const WebSocket = require('ws')
const request = require('request')
const utils = require ('./utils.js')
const {
  getWssURL,
  getApiKeys,
  generateAuth
} = utils

function message(wss, payload) {
  const msg = typeof payload === 'string' 
    ? payload
    : JSON.stringify(payload)
  console.log(' >>> [ WSS SEND ] : ', msg)
  wss.send(msg)
}

function auth (wss, options = {}) {
  const { calc = 0 } = options
  const { apiKey = '', apiSecret = '' } = getApiKeys()
  const payload = generateAuth({
    apiKey,
    apiSecret,
    version: '2.0',
    calc
  })
  message(wss, payload)
}

function connect(cb) {
  const url = getWssURL()
  const wss = new WebSocket(url)
  wss.onopen = () => {
    console.log(' <<< [ WSS CONNECTED TO', url ,']')
    setTimeout( () => cb(wss), 200 )
  }
  wss.onmessage = (msg) => console.log(' <<< [ WSS MSG ]  : ', msg.data)
  wss.onclose = () => console.log(' !!! [ WSS CLOSED ]')

  return wss
}

module.exports = {
  connect,
  message,
  auth
}