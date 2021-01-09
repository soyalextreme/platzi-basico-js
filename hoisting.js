// var flota hacia arriba por el hoisting 
// var mi nombre

console.log(miNombre)
var miNombre = "Alejandro Andrade";
 


function name (){
    for(var i = 0; i < 10; i++){
        print(i)
    }

    if(true){
        var chucho = "chucho"
    }

    console.log(i, chucho)
}

