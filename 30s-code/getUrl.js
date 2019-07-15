// url有三种情况
// https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=&local_province_id=33
// https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800&local_province_id=33
// https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800,700&local_province_id=33
// 匹配elective后的数字输出（写出你认为的最优解法）:
// [] || ['800'] || ['800','700']

const url = [
  'https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=&local_province_id=33',
  'https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800&local_province_id=33',
  'https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800,700&local_province_id=33'
]

const getParams = (url, name) => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`)
  const result = url.match(reg)
  if (result != null) {
    return result[2] ? result[2].split(',') : []
  }
  return []
}

const result = url.map(val => {
  return getParams(val, 'elective')
})

console.log(result)
