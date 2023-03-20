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

     const gstCalc=(total)=>{
            return total+((total*18)/100);
     }

     function getdate(){
          let today=new Date();
          const obj={
            time:today.getHours() + ":" + today.getMinutes() + ":",
            data:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
          }
         return obj
     }

     const orderData={
            cname:name,
            cemail:Email,
            TableNum:data,
            order:cart,
            bill:gstCalulated,
            today:getdate()
     }
      
     let options = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
      };


     const paymentSend=async ()=>{

     

        const res= await fetch('/payment',options)
        const data= await res.json();
        
        console.log(data);
      
      
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
      <h1 className='heading' >Summary page</h1>
       <p>Table number : {data}</p>

         <div className="inputd-field">
            <span>
                Enter name: <input onChange={(event)=>{
                       setName(event.target.value)
            }} type='text'></input> 
            </span>
            <span>Enter email: <input onChange={(event)=>{
                       setEmail(event.target.value)
            }} type='email'></input> </span>
         </div>
        
        <p>Your Name:{name}</p>
        <p>Your Email:{Email}</p>
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

            <h1>{total}</h1>


        </div>
             
             <h1>after 18% gst : {gstCalulated}</h1>


             <br />

             <button className='pay-btn' onClick={paymentSend} >Pay</button>

    </>
  )
}

export default Summary