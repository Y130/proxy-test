const proxy = require('koa2-proxy')

// 转发请求到指定host
proxy.when('/', function(ctx) {
  ctx.request.host = 'localhost:3000'
  ctx.request.protocol = 'http'
})

proxy.on('end', function(ctx) {
  ctx.response.type = 'text/html'
  ctx.response.body += `<br/>proxy echo: proxy.ip = ${ctx.proxy.localhost}, request.ip = ${ctx.request.ip}, request.ips = ${JSON.stringify(ctx.request.ips)}`
})

// 监听端口
proxy.listen(9527)