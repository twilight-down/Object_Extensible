function paddingNum(num) {
    let str = num.toString();
    let numArr = str.split('.')
    let left = numArr[0];
    let right = numArr[1]
    let rightArr = right === undefined ? '' : '.' + right
    let leftArr = left.split('')
    let resultArr = []
    let count = 0;
    for (let i = leftArr.length - 1; i >= 0; i--) {
        resultArr.unshift(leftArr[i])
        count++
        if (!(count % 3) && i !== 0) {
            resultArr.unshift(',')
        }
    }
    return resultArr.join('').concat(rightArr);
}

console.log(paddingNum(123));
console.log(paddingNum(23222342342.45342342));