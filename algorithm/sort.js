Array.prototype.swapAt = function (a, b) {
    this[a] = this[a] ^ this[b];
    this[b] = this[a] ^ this[b];
    this[a] = this[a] ^ this[b];
}
var num = [5, 3, 7, 1, 8, 2, 9, 4, 7, 2, 6, 6];


var M_sort = {
    arr: [],
    aux: [],
    go: function () {
        this.mergeSort(0, this.arr.length - 1);
    },
    // 归并排序
    mergeSort: function (lo, hi) {
        if (lo < hi) {
            const mid = parseInt((lo + hi) / 2);
            this.mergeSort(lo, mid);
            this.mergeSort(mid + 1, hi);
            this.merge(lo, mid, hi);
        }
    },

    merge: function (lo, mid, hi) {
        this.aux = this.arr.concat();
        let i = lo;
        let j = mid + 1;
        for (var k = lo; k <= hi; k++) {
            if (i > mid) {
                this.arr[k] = this.aux[j];
                j++;
            } else if (j > hi) {
                this.arr[k] = this.aux[i];
                i++;
            } else if (this.aux[i] > this.aux[j]) {
                this.arr[k] = this.aux[j];
                j++;
            } else {
                this.arr[k] = this.aux[i];
                i++;
            }
        }
    }
}

M_sort.arr = num;
M_sort.go();
console.log(num);
num.swapAt(0,1);
console.log(num);