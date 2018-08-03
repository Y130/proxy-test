const Koa = require('koa')
const app = new Koa()

// Request remote address. Supports X-Forwarded-For when app.proxy is true.
app.proxy = true

app.use(async ctx => {
  ctx.body = `server echo: request.ip = ${ctx.request.ip}, request.ips = ${JSON.stringify(ctx.request.ips)}`
})

app.listen(9527)