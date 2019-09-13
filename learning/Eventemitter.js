function Eventemitter() {
  this._maxListeners = 10
  this._events = Object.create(null)
}

/**
 * type: 事件类型 保存着该类型事件的所有监听器
 * listener: 事件触发的监听器
 * prepend: true 的话就是插入到监听器列表头 注意监听器的触发顺序和队列顺序是一致的
 */
Eventemitter.prototype.addListener = function(type, listener, prepend) {
  if (!this._events) {
    this._events = Object.create(null)
  }
  if (this._events[type]) {
    if (prepend) {
      this._events[type].unshift(listener)
    } else {
      this._events[type].push(listener)
    }
  } else {
    this._events[type] = [listener]
  }
}

Eventemitter.prototype.removeListener = function(type, listener) {
  if (Array.isArray(this._events[type])) {
    // 清除所有 listener
    if (!listener) {
      delete this._events[type]
    } else {
      this._events[type] = this._events[type].filter(
        e => e !== listener && e.origin !== listener
      )
    }
  }
}

Eventemitter.prototype.once = function(type, listener) {
  const only = (...args) => {
    listener.apply(this, args)
    this.removeListener(type, listener)
  }
  // 保存 listener 为了让 remove 的时候能够找到原 listener
  only.origin = listener
  // 相当于为 listener 添加了一个高阶组件
  this.addListener(type, only)
}

Eventemitter.prototype.emit = function(type, ...args) {
  if (Array.isArray(this._events[type])) {
    this._events[type].forEach(element => {
      element.apply(this, args)
    })
  }
}

Eventemitter.prototype.setMaxListeners = function(times) {
  this._maxListeners = times
}

// test

const emitter = new Eventemitter()

const listener = args => {
  console.log('listening!', args)
}

const onceListener = args => {
  console.log('listen once', args)
}

emitter.addListener('click', listener)
emitter.once('click', onceListener)

console.log('first emit----------------------')
emitter.emit('click')
console.log('second emit-----------------------')
emitter.emit('click', 'params')

emitter.removeListener('click', listener)
console.log('after removes-------------------')
emitter.emit('click')
