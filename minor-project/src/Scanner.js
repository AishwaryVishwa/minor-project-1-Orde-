import React,{useState,useContext} from 'react'
import { QrReader } from 'react-qr-reader';
import { NavLink } from 'react-router-dom';
import {Tablenumber} from './TableNumContext'
import './Scanner.css'
function Scanner() {
    const {data,setData}=useContext(Tablenumber)
    // const [data, setData] = useState('No result');
  return (
    <>
  
  
    <div className="camera">

    <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            // console.info(error);
          }
        }}
        containerStyle={{ width: '400px' }}
        style={{ width: '400px' }}
      />
       </div> 

<div className="data">

      <p>Your table number is {data}</p>
      {(data!=='no data'?<NavLink className='open-btn' to={'/menu'} >Open menu</NavLink>:<h1></h1>)}
</div>
    </>
  )
}

export default Scanner