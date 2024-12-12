import StringCalculcator from "../stringCalculator";
import StringValidationService from "../services/stringValidationService";


describe('Add function tests Success', () => {

    let addInstance:StringCalculcator;

    beforeAll(() => {
        addInstance = new StringCalculcator(); // Initialize the add instance

       jest.spyOn(StringValidationService.prototype, 'validateDelimeters')
        .mockImplementation(()=>{
            return true
        })

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

    test('add() should ignore numbers more than 1000', () => {
        expect(addInstance.add("1002,5\n//;\n1;2\n10007;8\n//.\n1.9")).toBe(26)
    });
});


describe('Add function failure', () => {

    let addInstance:StringCalculcator;

    // Runs once before all tests in this describe block
    beforeAll(() => {
        addInstance = new StringCalculcator(); // Initialize the add instance
        jest.spyOn(StringValidationService.prototype, 'validateDelimeters')
        .mockImplementation(()=>{
           throw  new Error("Input is invalid")
        })
    });

    test('add() should fail for invalid string', () => {
        expect(addInstance.add("1,\n")).toBe("Input is invalid")
    });


    test('add() should fail for character', () => {
        expect(addInstance.add(",")).toBe("Input is invalid")
    });

    test('add() should fail for invalid input', () => {
        expect(addInstance.add("4,5\n//\n1;2\n7;8\n//.\n1.9")).toBe("Input is invalid")
    });

    test('add() should fail for negative input', () => {
        jest.spyOn(StringValidationService.prototype, 'validateDelimeters')
        .mockImplementation(()=>{
            return true
        })
        jest.spyOn(StringValidationService.prototype, 'validateNumbersInInput')
        .mockImplementation(()=>{
           throw  new Error("negative numbers not allowed -4,-7,-9")
        })
        expect(addInstance.add("-4,5\n//;\n1;2\n-7;8\n//.\n1.-9")).toBe("negative numbers not allowed -4,-7,-9")
    });

});

