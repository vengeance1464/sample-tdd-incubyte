import { constants } from "./constants"
import StringValidationService from "./services/stringValidationService"
import StringUtils from "./utils"

class StringCalculcator{
   validationService: StringValidationService

   constructor()
   {
     this.validationService=new StringValidationService()

   }

    add(numsInput:string)
    {

       let allNumbers:string[]=[]
      try
      {
       if(numsInput.length===0) return 0

       if(numsInput.length===1) return Number(numsInput)

       this.validationService.validateDelimeters(numsInput)

       let transformedStringArr=StringUtils.splitString(numsInput,constants.NEW_LINE)

       let delimeter=constants.DEFAULT_DELEMETER

       let totalSum=0
       for(let item of transformedStringArr)
      {
           if(StringUtils.contains(item,"//"))
           {
              delimeter=item[item.length-1]
           }
            else if(StringUtils.contains(item,delimeter))
            {
             const numsArr = StringUtils.splitString(item,delimeter)

             allNumbers=[...allNumbers,...numsArr]

             const sum=numsArr.reduce((accum,curr)=>{
                return accum+Number(curr)
             },0)
     
             totalSum+= sum
            }else
            {
               totalSum+=Number(item)
            }
      }

      this.validationService.validateNumbersInInput(allNumbers)

       return totalSum
      }catch(err:any)
      {
         return err?.message
      }
    }
}


export default StringCalculcator