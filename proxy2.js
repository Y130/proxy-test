const http = require('http')
const httpProxy = require('http-proxy')
httpProxy.createProxyServer({target:'http://localhost:9527'}).listen(3000);