import StringUtils from "./utils"
class AddService{


    add(numsInput:string)
    {
       if(numsInput.length===0) return 0

       if(numsInput.length===1) return Number(numsInput)


       if(StringUtils.contains(numsInput,","))
       {
        const numsArr = StringUtils.splitString(numsInput,",")
        
        const sum=numsArr.reduce((accum,curr)=>{
           return accum+Number(curr)
        },0)

        return sum
       }
        
       return Number(numsInput)
    }
}


export default AddService