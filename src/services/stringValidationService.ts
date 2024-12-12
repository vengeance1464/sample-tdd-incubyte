import { Delimeters } from "../types";
import CustomError from "../customErrror";
import StringUtils from "../utils";

class StringValidationService {
  //Validates if string is properly formatted
  validateDelimeters(input: string) {
    const splitInputNewLines = StringUtils.splitString(
      input,
      Delimeters.NEW_LINE
    );

    if (splitInputNewLines.length > 0) {
      const invalidValues = splitInputNewLines.filter(
        (line) =>
          StringUtils.isEmpty(line) ||
          (StringUtils.contains(line, Delimeters.NEW_DELIMETER) &&
            (line.length === 2 || StringUtils.endsWithNumber(line))) ||
          (StringUtils.contains(line, Delimeters.NEW_LINE) &&
            !StringUtils.endsWithNumber(line)) ||
          !StringUtils.endsWithNumber(line)
      );

      if (invalidValues.length > 0) throw new CustomError("Input is invalid");
    }

    return true;
  }

  //validates the numbers in the input
  validateNumbersInInput(input: string[]): boolean {
    if (input.length > 0) {
      const filteredInvalidNumbers = input.filter((item) => Number(item) < 0);

      if (filteredInvalidNumbers.length > 0) {
        throw new CustomError(
          `negative numbers not allowed ${filteredInvalidNumbers.join(",")}`
        );
      }
    }
    return true;
  }
}

export default StringValidationService;
