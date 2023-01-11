const {Car} = require("./Car");

const Dealership = function(name, maxNumbOfCars) {
    this.name = name;
    this.maxNumbOfCars = maxNumbOfCars;
    this.carsInStock = [];
}

// Method to count cars in stock
Dealership.prototype.countCars = function() {
    return this.carsInStock.length;
}

// Method to add car to stock
Dealership.prototype.addCar = function(car) {
    if(this.carsInStock.length < this.maxNumbOfCars) {
        return this.carsInStock.push(car);
    }
}

// Method to return the manufacturers of all cars
Dealership.prototype.manufacturersInArray = function() {
    return this.carsInStock.map((car) => {
        // for each element in the array, returnig the name of the car( manufacturer)
        return car.name
    });
}







module.exports = {Dealership};