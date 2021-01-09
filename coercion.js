


var a = 3;
console.log(3 * "2"); // 6
console.log(a * true); // 3 * 1 = 3


console.log(2 + '2'); // 22

b = a + "";
var implicit = typeof b;
var explicit = typeof String(a)
console.log(implicit, explicit); // string
