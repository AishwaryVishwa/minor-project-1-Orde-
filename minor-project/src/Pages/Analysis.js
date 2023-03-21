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

            console.log(res);

            const data=await res.json();
            console.log(data);
            if(res.status!==200)
            {
                const err=new Error(res.error)
                throw err;
            }
            // console.log(data)

        } catch (error) {
            console.log(error);
            // navigate('/login')
        }
    }
    useEffect(()=>{
        
        callAnalysisPage();

    },[])
  return (
    <>
       analusis
    </>
  )
}

export default Analysis