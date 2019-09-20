/*
关于 readyState
0	UNSENT	代理被创建，但尚未调用 open() 方法。
1	OPENED	open() 方法已经被调用。
2	HEADERS_RECEIVED	send() 方法已经被调用，并且头部和状态已经可获得。
3	LOADING	下载中； responseText 属性已经包含部分数据。
4	DONE	下载操作已完成。
*/

/**
 *
 * @param {*} type
 * @param {*} url
 * @param {*} params
 */

const ajax = (type, url, params) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    const onStateChange = () => {
      // 请求已经结束
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          resolve(xhr.responseText)
        } else {
          reject(xhr.status)
        }
      } else {
        reject('connect error!')
      }
    }
    const onProcess = e => {
      console.log('request on process!')
    }
    const onLoad = e => {
      console.log('request finished!')
    }
    const onError = e => {
      reject(e)
    }
    const onAbort = e => {
      console.log('request canceled!')
    }
    xhr.addEventListener('readystatechange', onStateChange)
    xhr.addEventListener('progress', onProcess)
    xhr.addEventListener('load', onLoad)
    xhr.addEventListener('error', onError)
    xhr.addEventListener('abort', onAbort)
    if (type && type === 'POST') {
      xhr.open('POST', url)
      xhr.send(params)
    } else {
      xhr.open('GET', url)
      xhr.send()
    }
  })
}

ajax('GET', 'www.baidu.com')
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })



