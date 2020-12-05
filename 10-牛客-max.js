let a = [1, 2, 3, 4]
console.log(Math.max(a));
console.log(Math.max(...a));
console.log(Math.max(a[0], a[1], a[2], a[3]));
console.log(Math.max.call(Math, a[0], a[1], a[2], a[3]));
console.log(Math.max.call(null, a[0], a[1], a[2], a[3]));
console.log(Math.max.apply(Math, a));
console.log(Math.max.apply(null, a));