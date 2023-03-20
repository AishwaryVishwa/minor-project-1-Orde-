import { createContext,useState } from "react"
import React from 'react'
 export const Tablenumber=createContext();
function TableNumContext({children}) {
    const [data,setData]=useState('no data');
  return (
    <>
         <Tablenumber.Provider value={{data,setData}}>
            {children}
         </Tablenumber.Provider>
    </>
  )
}

export default TableNumContext