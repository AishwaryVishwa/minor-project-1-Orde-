import React,{useState,useContext} from 'react'
import { QrReader } from 'react-qr-reader';
import { NavLink } from 'react-router-dom';
import {Tablenumber} from './TableNumContext'
function Scanner() {
    const {data,setData}=useContext(Tablenumber)
    // const [data, setData] = useState('No result');
  return (
    <>
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
      <p>{data}</p>

      <NavLink to={'/menu'} >Open menu</NavLink>
    </>
  )
}

export default Scanner