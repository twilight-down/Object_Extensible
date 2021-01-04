var arr = [1, 2, 3, 4]
console.log(arr.__proto__); // []
// arr.__proto__ = null
arr = Object.setPrototypeOf(arr, null)
console.log(arr.__proto__); // undefined
console.log(arr); // [1,2,3,4]