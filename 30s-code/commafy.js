function commafy(num) {
  if (num) {
    let str = `${num}`
    str = str.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    return str
  }
  return 0
}