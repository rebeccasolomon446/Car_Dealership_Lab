const {Car} = require("./car");

let car;

beforeEach(() => {
    car = new Car("BMW", 1000, "engine1");
})

describe("manufacturer test", () => {
    test('can access manufacturer', () => {
        expected = "BMW";
        actual = car.manufacturer;
        expect(actual).toBe(expected);
    });

    describe ('price test', () => {
        test('assign price to car', () => {
            expect(car.price).toBe(1000);
        });
        });
        describe ('test engine type', () => {
            test('assign eng type to car', () => {
                expect(car.engineType).toBe("engine1");
            });
            });
});