/*
图片标签结构
<img src="" data-origin="true-url.jpg">
且 img 的父元素为 viewport 默认

⚠️ 填充型元素一定要给其设置一个宽或高，否则他一开始是没有宽高的，那就会全部加载在一起
那样就会同时触发交叉观察者 那就没有意义了
*/


const images = document.querySelectorAll('.lazyload')
const parent = document.querySelector('.parent')
const observer = new IntersectionObserver(entries => {
  entries.forEach(item => {
    console.log(item.isIntersecting)
    if (item.isIntersecting) {
      item.target.src = item.target.dataset.origin
      item.target.textContent
      observer.unobserve(item.target)
    }
  })
}, {
  root: parent
})

images.forEach(item => observer.observe(item))

parent.addEventListener('mouseenter', e => {
  console.log(e)
})