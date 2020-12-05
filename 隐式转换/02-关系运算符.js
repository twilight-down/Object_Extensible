// 只有一边是字符串时会将该数据按照Numbe(xx)去进行转换
console.log("2" > 10);
// 当关系运算符两边都是字符串时会都转换为字符串然后进行比较
// 但是转换规则有所不同 并不是按照Number(xx)来转换的
// 而且转换为字符串的unicode去转换
// 在转换时会调用.chartCodeAt
// 这个方法会将第一个字符进行转换
console.log("2" > "10");
console.log("2".charCodeAt());
console.log("10".charCodeAt());
// 多个字符的情况 
// 同样也是按照Unicode的规则去转换
// 多个字符进行比较的时候是从左往右依次进行比较的
// 如下先比较 a和 b 不相等则直接得出结果
// 如果值相同则比较下一个 直到得出结果为止
console.log("abc" > "b");
console.log("b" > "abc");
console.log("abc" > "aaf");

// 几个特殊情况
console.log(undefined == undefined);
console.log(null == null);
console.log(undefined == null);
console.log(NaN == NaN);