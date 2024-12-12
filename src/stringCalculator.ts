import { Delimeters } from "./types"
import StringValidationService from "./services/stringValidationService"
import StringUtils from "./utils"

class StringCalculcator{
   validationService: StringValidationService

   constructor()
   {
     this.validationService=new StringValidationService()

   }

   //adds the numbers in the input string
    add(numsInput:string)
    {

       let allNumbers:string[]=[]
      try
      {
       let result=this.validationService.validateDelimeters(numsInput)

       if(!result)
       {
         throw new Error("Input is invalid")
       }

       let transformedStringArr=StringUtils.splitString(numsInput,Delimeters.NEW_LINE)

       let delimeter:string=Delimeters.DEFAULT_DELEMETER

       let totalSum=0
       for(let item of transformedStringArr)
      {
           if(StringUtils.contains(item,Delimeters.NEW_DELIMETER))
           {
              delimeter=item[item.length-1]
           }
            else if(StringUtils.contains(item,delimeter))
            {
             const numsArr = StringUtils.splitString(item,delimeter)

             allNumbers=[...allNumbers,...numsArr]

             const sum=numsArr.reduce((accum,curr)=>{
                if(Number(curr)<=1000)
                return accum+Number(curr)

                return accum
             },0)
     
             totalSum+= sum
            }else
            {
               totalSum+=Number(item)
            }
      }

       result=this.validationService.validateNumbersInInput(allNumbers)

       return totalSum
      }catch(err:any)
      {
         return err?.message
      }
    }
}


export default StringCalculcator