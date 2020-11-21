function dupicateWord(arr) {
    let map = new Map();
    for (i of arr) {
        if (map.has(i)) {
            map.set(i, true)
        } else {
            map.set(i, false)
        }
    }
    return map
}

function dupicateWord1(arr) {
    let obj = new Object();
    for (i of arr) {
        if (obj[i]) {
            obj[i] = true
        } else {
            obj[i] = false
        }
    }
    return obj
}

let arr1 = ['a', 'b', 'c', 'c', 'a']
console.log(dupicateWord(arr1));
console.log(dupicateWord1(arr1));