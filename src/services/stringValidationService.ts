import { constants } from "../constants";
import StringUtils from "../utils";

class StringValidationService{


validate(input:string)
{
    if(StringUtils.contains(input,constants.NEW_LINE))
    {
   const splitInputNewLines=StringUtils.splitString(input,"\n")

   if(splitInputNewLines.length>0)
   {
   const invalidValues=splitInputNewLines.filter(line=>line==="" ||StringUtils.contains(line,"//") && (line.length===2||StringUtils.endsWithNumber(line)) || StringUtils.contains(line,"\n") 
   &&!StringUtils.endsWithNumber(line) )

   if(invalidValues.length>0)
    throw new Error("Input is invalid")
   }
}

}


}


export default StringValidationService