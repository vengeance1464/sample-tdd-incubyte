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

      try
      {
       if(numsInput.length===0) return 0

       if(numsInput.length===1) return Number(numsInput)

       this.validationService.validate(numsInput)

       let transformedStringArr=StringUtils.splitString(numsInput,constants.NEW_LINE)

       let delimeter=constants.DEFAULT_DELEMETER

       let totalSum=0
       for(let item of transformedStringArr)
      {
            if(StringUtils.contains(item,delimeter))
            {
             const numsArr = StringUtils.splitString(item,delimeter)
             
             const sum=numsArr.reduce((accum,curr)=>{
                return accum+Number(curr)
             },0)
     
             totalSum+= sum
            }else
            {
               totalSum+=Number(item)
            }
      }

       return totalSum
      }catch(err:any)
      {
         return err?.message
      }
    }
}


export default StringCalculcator