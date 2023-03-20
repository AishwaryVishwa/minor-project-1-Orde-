import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Menu from './Pages/Menu';
import Scanner from './Scanner';
import Summary from './Pages/Summary';
import TableNumContext from './TableNumContext';
import CartContext from './CartContext';
import Opening from './Pages/Opening';
import Owner from './Pages/Owner';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
const App = () => {
  return (
    <>
    <CartContext>


    <TableNumContext>

       <BrowserRouter>
          <Routes>
              <Route path='/' element={<Opening/>}></Route>

              <Route path='/scanner' element={<Scanner/>} ></Route> 
                
              <Route path='/menu' element={<Menu/>} ></Route> 

              <Route path='/summary' element={<Summary/>} ></Route>  
              
              <Route path='/owner' element={<Owner/>}></Route>
              <Route path='/register' element={<Registration/>}></Route>
              <Route path='/login' element={<Login/>}></Route>

          </Routes>
       </BrowserRouter>    
    </TableNumContext>
    </CartContext>
      
    </>
  )
}
export default App;