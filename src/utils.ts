class StringUtils {
  // Static method that checks if a string contains a substring
  static contains(str: string, substring: string): boolean {
    return str.includes(substring);
  }

  //static method for empty string

  static isEmpty(str: string): boolean {
    return str.length <= 0;
  }

  //Static methof which splits a string based on delimeter and returns string array
  static splitString(str: string, delimeter: string): string[] {
    return str.split(delimeter);
  }

  static endsWithNumber(str: string): boolean {
    // Regular expression to check if the last character is a number
    return /\d$/.test(str);
  }
}

export default StringUtils;
