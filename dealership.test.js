const {Car} = require("./Car");
const {Dealership} = require('./Dealership');

let dealership;
let car;

beforeEach(() => {
    dealership = new Dealership("Reb's Car's", 4);
    car1 = new Car("BMW", 100000, "engine1");
    car2 = new Car("Mercedes", 250000, "engine2");
    car3 = new Car("Audi", 150000, "engine3");
    dealership.addCar(car1);
    dealership.addCar(car2);
    dealership.addCar(car3);
    
})

describe ('Dealership Tests', () => {

    test('can add car to stock when max number of cars is not reached', () => {
        car4 = new Car("mini cooper", 5000, "engine4");
        dealership.addCar(car4);
        actual = dealership.countCars();
        expected = 4;
        expect(actual).toBe(expected);
    });

    test('cannot add car to stock when max number of cars is reached', () => {
        let car5 = new Car("Nissan Micra", 4000, "engine4");
        dealership.addCar(car5);
        actual = dealership.countCars();
        expected = 3;
        expect(actual).toBe(expected);
    });


    test('can count number of cars in stock', () => {
        expect(dealership.countCars()).toBe(3);
    });

    

});



