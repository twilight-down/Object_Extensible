let fn1 = function(x) {
    return x + 10;
};
let fn2 = function(x) {
    return x * 10;
};
let fn3 = function(x) {
    return x / 10;
}

function compose(...funcs) {
    // funcs传递的函数的集合
    return function proxy(...args) {
        // args :第一次调用函数传递的参数的集合
        let len = funcs.length;
        if (len === 0) {
            // 一个函数都不需要执行 直接返回args
            return args;
        }
        if (len === 1) {
            // 只需要执行一个函数
            // 把其结果范回出去
            return funcs[0](...args)
        };
        return funcs.reduce((x, y) => {
            return typeof x === 'function' ? y(x(...args)) : y(x);
        }, 0)
    };
}

console.log(compose()(5)); //[5]
console.log(compose(fn1)(5)); //15
console.log(compose(fn1, fn2)(5)); //150
console.log(compose(fn1, fn2, fn1, fn3)(5)); //16