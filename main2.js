"use strictt";
var str = "hello";
(function (a) {
    console.log (a);
})(str);

var sum = (a, b) => {
    return a + b;
};

console.log (sum(3, 4));

var sum = (a, b) => a + b;
console.log (sum(1, 5));