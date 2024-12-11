
class AddService{


    add(numsInput)
    {
       if(numsInput.length===0) return 0

       if(numsInput.length===1) return Number(numsInput)


       if(numsInput.includes(","))
       {
        const numsArr = numsInput.split(",")
        
        const sum=numsArr.reduce((accum,curr)=>{
           return accum+Number(curr)
        },0)

        return sum
       }
        
       return Number(numsInput)
    }
}


export default AddService