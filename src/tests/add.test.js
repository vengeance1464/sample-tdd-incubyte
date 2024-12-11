import AddService from "../add";

describe('Utility Function Tests', () => {

    let addInstance;

    // Runs once before all tests in this describe block
    beforeAll(() => {
        addInstance = new AddService(); // Initialize the add instance
    });
    test('add() should correctly work for empty string', () => {
        expect(addInstance.add(""))
    });
});