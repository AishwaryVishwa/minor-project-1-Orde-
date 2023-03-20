import React, { useContext } from 'react'
import './Dish.css'
import { Cartcontext } from '../CartContext'
function Dish({ DishObj,dispatchFunc }) {
    // console.log("dishobj",DishObj);
    const {cartState:{cart}}=useContext(Cartcontext)
   
    return (
        <>
            <div className="listings">
                <div className="dish-img">

                </div>
                <span className="dishes">
                    <h4>{DishObj.name}</h4>
                    <p>&#8377;  {DishObj.rate}</p>
                </span>


                {(cart.length!=0 && (cart.some((val)=>val.id===DishObj.id)) )?
                <button className='addbtn' >Added</button>
                :
                <button className='addbtn' onClick={()=>{
                    dispatchFunc({type:'add-to-cart',data:DishObj})
                }} >Add</button>
                }


            </div>
        </>
    )
}

export default Dish