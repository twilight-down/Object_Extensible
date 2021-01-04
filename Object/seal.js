let obj = {}
obj.a = '密闭之前的属性a'
Object.seal(obj)
obj.b = '密闭之后添加的属性b'
console.log(obj.a, obj.b); // 密闭之前的属性a  undefined
obj.a = '密闭之后继续去修改属性a'
console.log(obj.a);
delete obj.a
console.log(obj); //{ a: '密闭之后继续去修改属性a' } a属性未被删除