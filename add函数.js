function add(...outerArgs) {
    add = function(...innerArgs) {
        outerArgs.push(...innerArgs);
        return add;
    };
    add.toString = function() {
        return outerArgs.reduce((x, y) => x + y); //箭头函数加不加括号区别很大 加括号需要手动写return 不加不用写
    };
    return add
}
// 第一次执行ADD outerArgs=[1,2] 重写了ADD
// 第二次执行ADD innerArgs=[3]  outerArgs=[1,2,3]
// 第三次执行ADD innerArgs=[4]  outerArgs=[1,2,3,4]
// .........
// outerArgs = [1,2,3,4,5,6,7,8,9,10]

let res = add(1, 2)(3)(4)(5, 6, 7, 8, 9, 10)
    // alert(res)  alert 会把输出的值转换为字符串
console.log(res.toString());

// function add1(...outArgs) {
//     add1 = function(...innerArgs) {
//         outArgs.push(...innerArgs)
//         return add1
//     }
//     add1.toString = function() {
//         return outArgs.reduce((x, y) =>
//             x + y
//         )
//     }
//     return add1
// }

// let res1 = add1(1, 2)(3)(4)(5, 6, 7, 8, 9, 10)
//     // alert(res)  alert 会把输出的值转换为字符
// console.log(res1.toString());