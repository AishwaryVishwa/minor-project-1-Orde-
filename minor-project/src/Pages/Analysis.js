import React,{useEffect} from 'react'
import { useNavigate } from 'react-router';
function Analysis() {
    const navigate =useNavigate();
    const callAnalysisPage=async()=>{
        try {
            const res=await fetch('/analysis',{
                method:'GET',
                headers:{
                    Accept:'application/json',
                    'Content-type':'application/json',
                    credentials:'include'
                }
            });

            const data=await res.json();
            console.log(data);

            if(res.status!==200)
            {
                const err=new Error(res.error)
                throw err;
            }
           

        } catch (error) {
            console.log(error);
            navigate('/login')
        }
    }


    function getdate(){
        let today=new Date();
        const obj=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()

       return obj
   }

    const getOrderList=async()=>{
         try {
               const res=await fetch('/getOrderList')
               const data=await res.json();
               console.log(data);
         } catch (error) {
            console.log(error);
         }
    }
    useEffect(()=>{
        
        callAnalysisPage();
            
        getOrderList();

    },[])
  return (
    <>
       
    </>
  )
}

export default Analysis