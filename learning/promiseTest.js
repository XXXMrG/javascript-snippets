
const p = new Promise((resolve, reject) => {
  resolve('123')
})

p.then(val => {
  console.log(val)
}).finally(() => {
  return 'a'
}).then((val => {
  console.log(val)
}))