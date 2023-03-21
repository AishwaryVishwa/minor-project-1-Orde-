import React,{useContext} from 'react'
import { Tablenumber } from '../TableNumContext'
import {Cartcontext} from '../CartContext'
import Header from './Header'
import Dish from './Dish'
import './Menu.css'

function Menu() {
    const {data}=useContext(Tablenumber)
    const {cartState:{products},dispatch}=useContext(Cartcontext)
  return (
    <>
       <Header/>

       <div className="res-data">

        <p className='head' >Our regular menu</p>

        <p>Table number :{data}</p>

       </div>
     
     <div className="dish-scroll">

       {products.map((val,id)=>{
           return(
            <div key={id} >
               <Dish DishObj={val} dispatchFunc={dispatch} />
            </div>
        )
    })}
    </div>
    
    </>
  )
}

export default Menu