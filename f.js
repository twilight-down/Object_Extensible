let a = {
    n: 10
}
let b = a;
b.m = b = {
    n: 20
};
console.log(a);
console.log(b);