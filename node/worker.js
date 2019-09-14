const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(`handled by child, pid is ${process.pid} \n`)
  // throw new Error('sss')
})

let worker
process.on('message', (m, tcp) => {
  if (m === 'server') {
    worker = tcp
    worker.on('connection', socket => {
      server.emit('connection', socket)
    })
  }
})
// 出现异常 发送自杀信号
process.on('uncaughtException', err => {
  process.send({ act: 'suicide' })
  // 所有连接关闭后 退出进程
  worker.close(() => {
    process.exit(1)
  })
})
