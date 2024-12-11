import StringCalculcator from "../stringCalculator";

describe('Add function tests', () => {

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

    test('add() should fail for invalid string', () => {
        expect(addInstance.add("1,\n")).toBe("Input is invalid")
    });

    test('add() should compute for valid string with new lines', () => {
        expect(addInstance.add("1\n2,3")).toBe(6)
    });

    test('add() should compute for valid string with ; delimeter', () => {
        expect(addInstance.add("//;\n1;2")).toBe(3)
    });

    test('add() should compute for valid string with multiple delimeter', () => {
        expect(addInstance.add("4,5\n//;\n1;2\n7;8")).toBe(27)
    });

    test('add() should compute for valid string with multiple delimeter', () => {
        expect(addInstance.add("4,5\n//;\n1;2\n7;8\n//.\n1.9")).toBe(37)
    });

    test('add() should fail for invalid input', () => {
        expect(addInstance.add("4,5\n//\n1;2\n7;8\n//.\n1.9")).toBe("Input is invalid")
    });
});

