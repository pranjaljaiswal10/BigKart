import {useState,useEffect} from "react";
import { useFilter } from "../utils/filterContext";
const Filter=()=>{
    const {filterState,filterDispatch}=useFilter();
    const [categories,setCategories]=useState([])
    useEffect(()=>{
     fetchData()
    },[])
  async function fetchData(){
    const response=await fetch('https://fakestoreapi.com/products/categories')
    const data=await response.json()
    setCategories(data)  
}

const handlePriceRange=(e)=>{
    filterDispatch({type:"PRICE_CHANGE",payload:e.target.value})  
}
const handleRating=(e)=>{
    filterDispatch({type:"RATING_CHANGE",payload:e.target.value})
}
const handleCategory=(e)=>{
    filterDispatch({type:"CATEGORY_CHANGE",payload:e.target.value})
}
const handleSort=(e)=>{
    filterDispatch({type:"SORT_CHANGE",payload:e.target.value})
}
const handleClearAll=(e)=>{
    filterDispatch({type:"CLEAR_ALL",payload:e.target.value})
}

return(
    <div className="filter">
    <div>
            <span>Filter</span>
     <span onClick={(e)=>{handleClearAll(e)}}>clear all</span>
</div>
<div>

    <input type="range" min={7} max={1000} value={filterState.priceRange} onChange={(e)=>handlePriceRange(e)} />
   <div> <label htmlFor="pricerange">Product within ${filterState.priceRange}</label></div>
     </div>
     <span>Rating</span>
     <div>
        <label htmlFor="rating">4.5</label>
        <input type="radio" name="" id="rating"  value="4.5" checked={filterState.rating==="4.5"} onChange={(e)=>
        {handleRating(e)}} />
        </div>
        <div>
        <label htmlFor="4.0">4.0</label>
        <input type="radio" name="" id="rating"  value="4.0" checked={filterState.rating==="4.0"} onChange={(e)=>
        {handleRating(e)}} />
        </div>
        <div>
        <label htmlFor="3.5">3.5</label>
        <input type="radio" name="" id="rating"  value="3.5" checked={filterState.rating==="3.5"} onChange={(e)=>{handleRating(e)}} />
        </div>
        <span>SortBy</span>
        <div>
        <label htmlFor="lowtohigh">lowtohigh</label>
        <input type="radio" name="" id="lowtohigh" value="lowtohigh" checked={filterState.sortBy==="lowtohigh"} onChange={(e)=>{handleSort(e)}}/>
        </div>
        <div>
        <label htmlFor="hightolow">hightolow</label>
        <input type="radio" name="" id="hightolow" value="hightolow" checked={filterState.sortBy==="hightolow"} onChange={(e)=>{handleSort(e)}}/>
        </div>
        <span>Category</span>
        {categories.map((item,index)=>{
            return(
                <div className="category" key={index} >
                <label htmlFor={item} >{item}</label>
     <input type="checkbox" name="" id={item} value={item} checked={filterState.selectedCategory.includes(item)} onChange={(e)=>{handleCategory(e)}} />    
     </div>
            )
        })}
</div>
)
}
export default Filter;