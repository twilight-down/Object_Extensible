var x = 10;
(function(x) {
    console.log(x);

    x = x || 20 && 30 || 40;
    console.log(x);
})();
console.log(x);