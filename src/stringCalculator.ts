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


       if(StringUtils.contains(numsInput,","))
       {
        const numsArr = StringUtils.splitString(numsInput,",")
        
        const sum=numsArr.reduce((accum,curr)=>{
           return accum+Number(curr)
        },0)

        return sum
       }
        
       return Number(numsInput)
      }catch(err:any)
      {
         return err?.message
      }
    }
}


export default StringCalculcator