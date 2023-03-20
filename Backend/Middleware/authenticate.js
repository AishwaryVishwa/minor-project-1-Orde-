const jwt =require('jsonwebtoken')

const authenticate=async (req,res,next)=>{

     try{
               const token=req.cookies.jwtoken;
               const verify=jwt.verify(token,process.env.SECRET_KEY)

               console.log(verify);
               next()
     }
     catch(err)
     {
        console.log(err);
     }
}

module.exports=authenticate