var student = ["Alejandro", "Maria", "Sergio", "Daniel"];


function sayHello(student){
    console.log(`Hello ${student}`);
}


function main(){
    for(let i = 0;  i < student.length; i++){
        sayHello(student[i]);
    }

    // Trae el elemento de el array
    for(let s of student){
        sayHello(s);
    }

    // Trae el indice de el array

    for(let index in student){
        sayHello(index);
    }

}


main();