onmessage = e => {
  const res = Math.pow(e.data[0], e.data[1])
  postMessage(`Result: ${res}`)
}