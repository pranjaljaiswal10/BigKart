import { createContext,useContext,useReducer } from "react";

const CartContext=createContext(null);

const intialState={
    cart:[]
}

function reducer(state,action){
  const {type,payload}=action;
  switch(type){
    case "ADD_TO_CART":
    return {...state,cart:[...state.cart,payload]}
    case "REMOVE_FROM_CART":
    return  {...state,cart:state.cart.filter(item=>item.id!==payload)};
    case "INCREASE_QUANTITY":
    return  {...state,cart:state.cart.map(item=>{
        if(item.id===payload)
        {
          return  {...item,quantity:item.quantity+1}
        }
        return item;
    })
};
    case "DECREASE_QUANTITY":
    return  {...state,cart:state.cart.map(item=>{
        if(item.id===payload && item.quantity>0)
        {
            return {...item,quantity:item.quantity-1}
        }
        return item;
    })};
    default:
        throw new Error("unhandlelled action")
  }
}

const CartProvider=({children})=>{
    const [cartState,cartDispatch]=useReducer(reducer,intialState)
    return(
        <CartContext.Provider value={{cartState,cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart=()=>useContext(CartContext);

export {CartProvider,useCart};