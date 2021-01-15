var myCar = {
    brand: "Tesla",
    model: "X",
    color: "black",
    year: 2020,
    // importante arrow functions pierden el scope de this.
    details: function(){
        console.log(`Brand: ${this.brand}\nModel: ${this.model}`);
    }
}


function main(){
    console.log(myCar.brand);
    console.log(myCar.color);
    myCar.details();
    console.log(myCar);
}


main();