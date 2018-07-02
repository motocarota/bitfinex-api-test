# Bitfinex API Test

This project aims to help the developers to get started with bitfinex API.

https://docs.bitfinex.com/

## Note

If you already know the API this project is not for you.
If you only need a layer of abstraction to implement your trading bot logic, a better suited project may be found here:

- https://github.com/bitfinexcom/bitfinex-api-node
- https://github.com/bitfinexcom/bitfinex-api-go
- https://github.com/bitfinexcom/bitfinex-api-ruby

## Installation

```
git clone
npm install
```

## API Keys

Public endpoints can be accessed directly without any authentication.
In order to inspect authenticated endpoints, you may need to obtain your account data; for doing so you will need to obtain API key/secret from bitfinex.com portal. See
https://docs.bitfinex.com/docs/api-access for more details.

Once you are ready, you have to set them as ENV variables
```
export BFX_API_KEY="xxxxxx"
export BFX_API_SECRET="yyyyyy"
```

## Example Usage:

just run
```
node v1/REST-summary.js
```
output:
```
url: https://www.bitfinex.com:2998/v2/auth/r/alerts?type=price
body: {}
nonce: 1528642373767000
signature: 3c090d785b2b01c758839b52ff780d69da2eb776fbd2ad7d506cbd76da1f6d9c704e9bac51728107afc4fa9d901ba073
response: [
  [
    "price:tBTCUSD:845.5",
    "price",
    "tBTCUSD",
    845.5,
    90
  ],
  ...
]
```

## Extra

In case you want to inspect what are you exactly sending to the Bitfinex API, you can do the following trick

```
// run a local netcat server on port 1234
nc -l 1234 &
// setup the BFX-API-BASE-URL ENV variable
export BFX-API-URL='localhost:1234'
```
now once you use and endpoint, netcat will show you the exact payload sent, complete with headers. (this trick helped me a lot to grok a lot of very tricky concepts)

## Contibution

If you find something missing or incomplete, you're totally right.
Feel free to open an issue pointing out the missing stuff (or a pull request) and I'll be happy to integrate it.
