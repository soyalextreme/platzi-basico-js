var student = ["Alejandro", "Maria", "Sergio", "Daniel"];

function sayHello(student){
    console.log(`Hello ${student}`);
}


function main(){
    while(student.length > 0){
        console.log(student);
        // el metodo de mutacion del shift nos saca un elemento de la lista.
        // por ende la lista se reduce su tama;o en 1.

        let singleStudent = student.shift();
        sayHello(singleStudent);
    }
}



main();
