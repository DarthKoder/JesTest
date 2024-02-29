/**
 * @jest-environment jsdom
 */

const addition = require("../calc");

/* create a test here with the test method then we'll pass in a description of the test. 
We'll say that it should return 42 for 20 + 22. 
Then a new arrow function, and inside we'll explain our expectations. 
So we expect, that when we call the addition function with 20, 22 that it should return 42. 
*/
describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test('should return 73 for 42 + 31', () => {
            expect(addition(42, 31)).toBe(73);
        });
    });
    describe("Subtract function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Divide function", () => {

    });
});