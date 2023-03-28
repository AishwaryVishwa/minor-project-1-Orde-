import React,{useContext,useEffect,useState} from 'react'
import { Tablenumber } from '../TableNumContext'
import {Cartcontext} from '../CartContext'
import './Summary.css'
function Summary() {

  const {data} =useContext(Tablenumber);
  const {cartState:{cart}} =useContext(Cartcontext)
  const [total,setTotal]=useState(0);
  const [gstCalulated,setgstCalculated]=useState();
  
  
  
  const [name,setName]=useState('');
  const [Email,setEmail]=useState('');
  console.log(name,Email)

     const gstCalc=(total)=>{
            return total+((total*18)/100);
     }

     function getdate(){
          let today=new Date();
          const obj={
            date:today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear(),
            time:today.toLocaleTimeString()
          }
         return obj
     }

     const orderData={
            cname:name,
            cemail:Email,
            TableNum:data,
            order:cart,
            bill:gstCalulated,
            date:getdate().date,
            time:getdate().time
     }
      
     let options = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
      };


     const paymentSend=async (e)=>{
        e.preventDefault()
        const res= await fetch('/payment',options)
        const data= await res.json();
        
        console.log(data);
        // window.alert()

      
     }

     useEffect(() => {
   
        setTotal(cart.reduce((acc,curr)=>{
          acc=acc+curr.qty*curr.rate;
          return acc
        },0))

        
        setgstCalculated(gstCalc(total));
      })
  return (
    <>

<div className="summary-body">


      <h1 className='heading' >Summary page</h1>

      

         <div className="inputd-field">
            {/* <span>
                Enter name: <input onChange={(event)=>{
                       setName(event.target.value)
            }} type='text'></input> 
            </span>
            <span>Enter email: <input onChange={(event)=>{
                       setEmail(event.target.value)
            }} type='email'></input> </span> */}


<form className="form">
                  <p>Table number : {data}</p>
  
    <input type="text" className="input" onChange={(event)=>{
                       setName(event.target.value)
            }} placeholder="username"/>
    <input type="email" onChange={(event)=>{
                       setEmail(event.target.value)
            }} className="input" placeholder="email"/>
    
  <span className="sub">Pay &#8377; {gstCalulated}</span>
    <button onClick={paymentSend} >Pay</button>
</form>
         </div>
        
        
        <div className="summary-div">
            <div className="cart-items">
                  {cart.map((val,id)=>{
                    return(
                        <div className='items' >
                                <span>{val.name}</span>
                                <span>{val.rate}</span>
                        </div>
                    )
                  })}
            </div>
            
            <h1 className='totalAmm'> Total amount after 18% gst </h1>
            <h1 className='total'> {gstCalulated}</h1>


        </div>
             


             

             {/* <button className='pay-btn' onClick={paymentSend} >Pay</button> */}
             </div>





             
    </>
  )
}

export default Summary