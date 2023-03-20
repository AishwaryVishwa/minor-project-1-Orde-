import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
function Login() {

  const [userData,setData]=useState();

  let name,value;
  const handleInput=(e)=>{
     name=e.target.name;
     value=e.target.value;

     setData({...userData,[name]:value})
  }
  let options={
    method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body:JSON.stringify(userData)
}
  const sendData=async(e)=>{
    console.log('onclick run');
        e.preventDefault();

        const res=await fetch('/login',options)
        const data=await res.json();
        console.log(data);
        if(res.status>=400 || !data)
        {
          window.alert(data.error)
        }else{
          window.alert(data.message)
        }
  }


  
  return (
    <>
     <div className="login">
        <form action="">

            
            <h2>Email</h2>
            <input type="email" name="email" onChange={handleInput} />

            <h2>Password</h2>
            <input type="text"  name='password' onChange={handleInput}/>

              
         <div>

                <button type="submit" name='login' onClick={sendData}>
                    Login
                </button>
              
         </div>
            
        </form>
         <br />
          <NavLink to='/register' >Not have account</NavLink>
      </div>
    </>
  )
}

export default Login