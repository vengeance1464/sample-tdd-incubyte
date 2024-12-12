import CustomError from "../customErrror";
import StringValidationService from "../services/stringValidationService";

describe("String Validation Service Success", () => {
  let stringValidationService: StringValidationService;

  beforeAll(() => {
    stringValidationService = new StringValidationService(); // Initialize the add instance
  });

  test("string validation service should validate delimeters", () => {
    expect(stringValidationService.validateDelimeters("1,2,7")).toBe(true);
  });
  test("string validation service should validate delimeters", () => {
    expect(stringValidationService.validateDelimeters("1\n2,3")).toBe(true);
  });
});

describe("String Validation Service Failure", () => {
  let stringValidationService: StringValidationService;

  beforeAll(() => {
    stringValidationService = new StringValidationService(); // Initialize the add instance
  });

  test("string validation service should validate delimeters", () => {
    expect(() => stringValidationService.validateDelimeters("1,\n")).toThrow(
      "Input is invalid"
    );
  });
  test("string validation service should validate delimeters", () => {
    expect(() => stringValidationService.validateDelimeters("1,\n")).toThrow(
      "Input is invalid"
    );
  });
  test("string validation service should validate delimeters", () => {
    expect(() =>
      stringValidationService.validateDelimeters("4,5\n//\n1;2\n7;8\n//.\n1.9")
    ).toThrow("Input is invalid");
  });
});
