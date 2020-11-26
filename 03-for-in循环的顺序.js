let obj = {
    '1': 'a',
    '1.4': 'p',
    '-1': 'b',
    'a': 'c',
    '2': 'd',
    '3': 'e',
    '0.5': 'f',
    '0': 'g',
    'age': 10
}
for (let key in obj) {
    console.log(key, obj[key]);
}
let arr = Object.values(obj)
console.log(arr);
/* 0 g
1 a
2 d
3 e
1.4 p
-1 b
a c
0.5 f
age 10 */