import { createContext,useContext,useReducer } from "react";

const WishlistContext=createContext(null);

const intialState={
    wishlist:[]
}

function reducer(state,action){
    const {type,payload}=action;
    switch(type){
        case "ADD_TO_WISHLIST":
       return {...state,wishlist:[...state.wishlist,payload]};
       case "REMOVE_FROM_WISHLIST":
        return {...state,wishlist:state.wishlist.filter(item=>item.id!==payload)};
       
        default:
       throw new Error("unhandlelled action")
    }
}

const WishlistProvider=({children})=>{
    const [wishlistState,wishlistDispatch]=useReducer(reducer,intialState);
  return(
    <WishlistContext.Provider value={{wishlistState,wishlistDispatch}}>
     {children}   
     </WishlistContext.Provider>
  )
}

const useWishlist=()=>useContext(WishlistContext);

export {useWishlist,WishlistProvider}