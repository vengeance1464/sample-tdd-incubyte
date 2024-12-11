import StringCalculcator from "../stringCalculator";

describe('Utility Function Tests', () => {

    let addInstance:StringCalculcator;

    // Runs once before all tests in this describe block
    beforeAll(() => {
        addInstance = new StringCalculcator(); // Initialize the add instance
    });
    test('add() should correctly work for empty string', () => {
        expect(addInstance.add("")).toBe(0)
    });

    test('add() should correctly work for one number', () => {
        expect(addInstance.add("5")).toBe(5)
    });

    test('add() should correctly work for two numbers separated by comma delimeter', () => {
        expect(addInstance.add("5,6")).toBe(11)
    });

    test('add() should correctly work for two numbers separated by comma delimeter', () => {
        expect(addInstance.add("5,6,9")).toBe(20)
    });
});

