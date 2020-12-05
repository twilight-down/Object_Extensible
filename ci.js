var myObj = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("A1 = " + this.foo);
        console.log("A2" + self.foo);
        (function() {
            console.log('b' + this.foo);
            console.log('b' + self.foo);
        })()
    }
}