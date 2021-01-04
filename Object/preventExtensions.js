let obj = {}
var obj2 = Object.preventExtensions(obj)
console.log(obj === obj2); // true

try {
    Object.defineProperty(obj, 'prototype1', { value: '定义在obj上面的属性a' });
} catch (e) {
    console.log(e); // TypeError
    console.log('-------------------------');
}