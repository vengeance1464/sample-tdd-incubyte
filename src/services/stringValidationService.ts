import StringUtils from "../utils";

class StringValidationService{


validate(input:string)
{
    if(StringUtils.contains(input,"\n"))
    {
   const splitInputNewLines=StringUtils.splitString(input,"\n")

   if(splitInputNewLines.length>0)
   {
   const invalidValues=splitInputNewLines.filter(line=>line!=="" && !StringUtils.endsWithNumber(line))

   if(invalidValues.length>0)
    throw new Error("Input is invalid")
   }
}

}


}


export default StringValidationService