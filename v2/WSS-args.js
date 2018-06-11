const methodList = require('./WSS-v2-methods.js')
const { connect, message } = require('../WSS-v2')
const id = process.argv.slice(2)[0] || 'ping'

const wss = connect(function cb (wss) {
  const payload = methodList[ id ] || id
  message(wss, typeof payload === 'function' ? payload() : payload)
})