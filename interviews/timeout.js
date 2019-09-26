const timer = (fn, wait) => {
  return function setTime() {
    setTimeout(setTime, wait)
    fn.call(null)
  }
}

const fn = () => {
  console.log(new Date())
}

const t = timer(fn, 1000)
t()


