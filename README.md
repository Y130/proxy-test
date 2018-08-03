#proxy-test
> a proxy test case

###安装依赖
```shell
$ cd /path/to/proxy-test
$ npm run dev
```

###运行代理
```shell
$ cd /path/to/proxy-test
$ npm run proxy
```

###运行服务
```shell
$ cd /path/to/proxy-test
$ npm run server
```

###其他说明

代理模式下，服务端可以获得终端的真实IP,但需要代理端和服务端支持,例如本例

代理端

```shell
const proxy = httpProxy.createServer({
  target:'http://127.0.0.1:9527',
  xfwd: true // adds x-forward headers
})
```

服务端
```shell
// Request remote address. Supports X-Forwarded-For when app.proxy is true.
app.proxy = true
```
