const Koa = require('koa')
const app = new Koa()

app.proxy = false

app.use(async ctx => {
  ctx.body = `server echo: request.ip = ${ctx.request.ip}, request.ips = ${JSON.stringify(ctx.request.ips)}`
})

app.listen(9527)