const methodList = require('./WSS-v2-methods.js')
const { connect, message, auth } = require('../WSS-v2')


const wss = connect(function cb (wss) {
  console.log('ready!')
})

const repl = require('repl')
const server = repl.start({
  prompt: '>'
})

Object.assign( server.context, methodList )

server.context.send = function send(msg){
  const payload = methodList[ msg ] || msg
  message(wss, payload)
}

server.context.auth = function (calc){
  auth(wss, { calc })
}

server.context.help = [
    'available commands: ',
    'help', 'send', 'auth', 'close',
    ...Object.keys( methodList )
  ].join(' ')


server.context.close = function close(){
  console.log('closing wss...')
  wss.close()
}
