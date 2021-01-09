// declarativas

console.log(myFunction);

function myFunction() {
    return 2;
}


// expresion

console.log(suma);
var suma = function(a, b) {
    console.log(`Sumando ${a} + ${b}`)
    return a + b;
}


let res = suma(2, 4);
console.log(res);

