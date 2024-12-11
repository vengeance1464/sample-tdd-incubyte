class StringUtils {
   
  
    // Static method that checks if a string contains a substring
    static contains(str: string, substring: string): boolean {
      return str.includes(substring);
    }


    //Static methof which splits a string based on delimeter and returns string array
    static splitString(str: string,delimeter:string): string[] {
      return str.split(delimeter)
    }
  }
  
  export default StringUtils