/*
    Author: Alejandro AS
    Date: 15 -January-2020
*/

const readline = require("readline");

// Global Variable Array For Cars
let allCars = [];

// Funcion Constructora
// Genera Clases Carros
function Car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.details = function(){
        console.log("===============================================================")
        console.log(`BRAND: ${this.brand}\nMODEL: ${this.model}\nYEAR: ${this.year}`);
        console.log("===============================================================")
    }
}

const main = () => {
    // Main Function.
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });


    const init = ()=>{
        rl.question("Car Brand:\n_", (carBrand)=>{
            rl.question("Car Model:\n_", (carModel)=>{
                rl.question("Car Year:\n", (carYear)=>{
                    let newCar = new Car(carBrand, carModel, carYear);
                    allCars.push(newCar);

                    rl.question("Wanna Continue\n[N] to quit.", (still)=>{
                        // validacion si continuar agregando carros.
                        if (still.toLowerCase() === "n"){
                            // quitar
                            return rl.close();
                        }
                        else{
                            // llamada recursiva
                            return init();
                        }
                    })
                })
            })
        })
    }

    rl.on("close", ()=>{
        // On close event.
        for(car of allCars){
            car.details();
        }
    })

    init();
}

// main process
main();