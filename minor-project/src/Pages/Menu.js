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

        <h1>Our regular menu</h1>

        <h1>Table number :{data}</h1>

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