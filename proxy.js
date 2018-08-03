const httpProxy = require('http-proxy')

const proxy = httpProxy.createServer({
  target:'http://127.0.0.1:9527',
  xfwd: true // adds x-forward headers
})

proxy.listen(3000)