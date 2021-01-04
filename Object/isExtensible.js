let obj = {}
console.log(Object.isExtensible(obj)) // true
obj.a = '被扩展的属性a'
console.log(obj.a); //被扩展的属性a
Object.preventExtensions(obj)
Object.seal(obj)
Object.freeze(obj)
console.log(Object.isExtensible(obj));
obj.b = '被冻结之后的不可扩展添加的属性b'
console.log(obj.b); // undefined 表示未被天剑，obj不可扩展