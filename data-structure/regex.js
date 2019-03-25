String.prototype.fuck = (function () {
    var entity = {
        quot: '"',
        lt: '<',
        gt: '>'
    }

    return function () {
        return this.replace(/&([^&;]+);/g, (a, b) => {
            console.log(a, b)
            var r = entity[b]
            return typeof r === 'string' ? r : a
        })
    }
}())

console.log('&lt;&quot;&gt;ff'.fuck())