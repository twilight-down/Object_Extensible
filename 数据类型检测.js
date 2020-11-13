let arr = [1, 2, 3, 4];
if (arr.constructor === Array) {
    console.log('ok');
}
console.log(Object.prototype.toString.call(arr));