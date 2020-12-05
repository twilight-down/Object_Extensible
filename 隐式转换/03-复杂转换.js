// 原理[].valueOf().toString() 得到空字符串
// Number('')==0
console.log('' == []); //true
console.log('' == 0); //true
console.log([] == 0); //true

// 其实本质上是![]的结果与0进行比较
// 逻辑非的优先级高于关系运算符
// 空数组转换布尔值得到true取反得到false false==0
console.log(![] == 0); //true
console.log([] == ![]); //true

// 引用数据类型存储在堆中，栈中存储的是地址，两个空数组的地址不同
console.log([] == []); //false

// {}.valueOf.toString()得到的是[object Object]
// Number('[object Object]')得到的结果是NaN
// !{}==false
// Number(false) == 0
// Number('[object Object]') == Number(false)   false
console.log({} == !{}); //false

// 引用数据类型存储在堆中，栈中存储的是地址，两个空对象的地址不同
console.log({} == {}); //false