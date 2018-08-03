const http = require('http')
const httpProxy = require('http-proxy')
httpProxy.createProxyServer({target:'http://localhost:3000'}).listen(9527);