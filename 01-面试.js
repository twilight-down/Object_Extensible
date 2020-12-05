let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34]

function getNthFibonacci(count) {

    return fibonacci[count]
}
let key = fibonacci.keys()
console.log(key);
console.log(getNthFibonacci(4));