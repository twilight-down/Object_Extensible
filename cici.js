var count = 0;

function foo() {
    this.count++
}
foo.count = 0;
for (var i = 0; i < 5; i++) {
    foo()
}
console.log(count, foo.count);