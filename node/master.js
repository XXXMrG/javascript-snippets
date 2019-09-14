const fork = require('child_process').fork
const cpus = require('os').cpus()
// tcp 连接
const server = require('net').createServer()
server.listen(1337)

let workers = {}
const createWorker = () => {
  const worker = fork(__dirname + '/worker.js')
  // 监听到自杀信号 马上重启一个新的工作进程
  worker.on('message', message => {
    if (message.act === 'suicide') {
      createWorker()
    }
  })
  worker.on('exit', () => {
    console.log(`Worker ${worker.pid} exited`)
    delete workers[worker.pid]
  })
  // 句柄转发
  worker.send('server', server)
  workers[worker.pid] = worker
  console.log(`Created worker pid: ${worker.pid}`)
}

for (let i = 0; i < cpus.length; i++) {
  createWorker()
}

process.on('exit', () => {
  for (const pid in workers) {
    workers[pid].kill()
  }
})