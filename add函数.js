function add(...outerArgs) {
    add = function(...innerArgs) {
        outerArgs.push(...innerArgs);
        return add;
    };
    add.toString = function() {
        return outerArgs.reduce((x, y) => x + y);
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

// function add1(...outa) {
//     add1 = function(...inner) {
//         outa.push(...inner)
//         return add1
//     };
//     add1.toString = function() {
//         return outa.reduce((x, y) => { return (x + y) })
//     }
//     return add1
// }
// let res1 = add1(2, 3, 4)(1, 1)(1)
// console.log(res1.toString());