import { createContext,useContext,useReducer } from "react";
const FilterContext=createContext();

const intialState={
    priceRange:300,
    rating:null,
    selectedCategory:[],
    sortBy:null,
    searchTxt:"",
}


 function reducer(state,action){
    const {type,payload}=action;
    switch(type){
    case "PRICE_CHANGE":
     return {...state,priceRange:payload}
    case "RATING_CHANGE":
    return {...state,rating:payload};
    case "CATEGORY_CHANGE":
    return  {...state,selectedCategory:state.selectedCategory.includes(payload)?state.selectedCategory.filter(item=>item!==payload):[...state.selectedCategory,payload]};
    case "SORT_CHANGE":
    return  {...state,sortBy:payload};
    case "SEARCH_CHANGE":
    return  {...state,searchTxt:payload} ;
    case "CLEAR_ALL":
    return {
        priceRange:300,
        rating:null,
        selectedCategory:[],
        sortBy:null,
        searchTxt:"",  
    }
    default:
        throw new Error("Unhandlelled action")
    }
}


const FilterProvider=({children})=>{
   
   
    const [filterState,filterDispatch]=useReducer(reducer,intialState)
  
    return(
        <FilterContext.Provider value={{filterState,filterDispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter=()=>useContext(FilterContext);

export {FilterProvider,useFilter}