import {  createContext,useState,useReducer,useEffect} from "react";

export const Cartcontext=createContext();



// const arr = [
//     {
//         id:'01',
//         name: 'Coffee',
//         rate: 100,
//         qty:1
//     },
    
//     {
//         id:'02',
//         name: 'Lemonade',
//         rate: 100,
//         qty:1
//     },
//     {
//         id:'03',
//         name: 'Cake',
//         rate: 10,
//         qty:1
//     },
//     {
//         id:'04',
//         name: 'Apple Pie',
//         rate: 10,
//         qty:1
//     },
//     {
//         id:'05',
//         name: 'Apple juice',
//         rate: 10,
//         qty:1
//     },
//     {
//         id:'06',
//         name: 'Dosa',
//         rate: 100,
//         qty:1
//     },
//     {
//         id:'07',
//         name: 'Burger',
//         rate: 120,
//         qty:1
//     },
//     {
//         id:'08',
//         name: 'Latte',
//         rate: 70,
//         qty:1
//     },
//     {
//         id:'09',
//         name: 'Tea',
//         rate: 10,
//         qty:1
//     },
    
// ]


let arr;

const cartReducer=(state,action)=>{
    
    switch (action.type) {
       case 'add-to-cart':
           
           return ({...state,cart:[...state.cart,action.data]})
      break;

      case 'remove-from-cart':
            
           return ({...state,cart:state.cart.filter((x)=>x.id!=action.id)})

       case 'inc-qty':
            // console.log('inc-qty',action.data.qty);
            return({...state,cart:state.cart.map(a => {
                let returnValue = {...a};
              
                if (a.id == action.id) {
                  returnValue.qty++;
                }
              
                return returnValue
              })})
      break;

       case 'dec-qty':
            // console.log('inc-qty',action.data.qty);
            return({...state,cart:state.cart.map(a => {
                let returnValue = {...a};
              
                if (a.id == action.id) {
                 if(returnValue.qty>1)
                 returnValue.qty--;
                }
              
                return returnValue
              })})
      break;
          
    
          
          default:
           return state;
           
    }
}


const CartContext=({children})=>{

    const [Arr,setArr]=useState();
    useEffect(()=>{
        console.log('context pafe');
        fetch('/getDishList')
        .then((res)=>res.json())
        .then((data)=>setArr(data))
    },[])
    
    // console.log(Arr);
       
    const products=Arr

    console.log("products are ",products);
    const [cartState,dispatch]=useReducer(cartReducer,{
        products:products,
        cart:[]
    });
     

    
    
    

    return(
        <>
       <Cartcontext.Provider value={{cartState,dispatch}}>
        {children}
       </Cartcontext.Provider>
        </>
    )
}

export default CartContext