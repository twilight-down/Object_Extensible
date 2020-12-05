var k = 0;
// 逗号表达式只有最后一项是有效的
for (var i = 0, j = 0; j < 6, i < 10; i++, j++) {
    k += i + j;
}
console.log(k)