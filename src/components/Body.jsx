import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { useCart } from "../utils/cartContext";
import useApplyFilter from "../utils/applyfiterhook"
import Filter from "./Filter"

const Body=()=>{
    const [product,setProduct]=useState([])
    const sortProducts=useApplyFilter(product)
    console.log(sortProducts)
    useEffect(()=>{
    getData();
        },[])
   async function getData(){
    const response=await fetch('https://fakestoreapi.com/products');
    const json=await response.json()
    console.log(json)
    setProduct(json)
   }



return sortProducts.length===0?(<> <h1>Data is loading...</h1> </>) : (
      <div className="product">
      <Filter/>
  <div className="productlist">
    {
      sortProducts.map(item=>{
        return(
          <Link to={`/singleProduct/${item.id}`} key={item.id}>
          <ProductCard {...item}/>
          </Link>
        )
      })
    }
  </div>
  </div>
    )
}
export default Body;
const ProductCard=({price,title,image,id,description})=>{
  const {cartDispatch,cartState}=useCart();
  const isExist=cartState.cart.find(item=>item.id===id)
  const handleAddCart=(e)=>{
    e.preventDefault()
    cartDispatch({type:"ADD_TO_CART",payload:{price,title,image,id,description,quantity:1}})
  }
const handleIncreaseQuantity=(e)=>{
  e.preventDefault()
  cartDispatch({type:"INCREASE_QUANTITY",payload:id})
}
  return(
    <div className="card">
      <img src={image} alt="" />
      <div className="title"><span>Brand:</span>{title}</div>
      <span className="price">${price}</span>
      <div>{isExist===undefined?<button onClick={(e)=>handleAddCart(e)}>buy now</button>:<button onClick={ (e)=>{ handleIncreaseQuantity(e)}}>buy now</button>}</div>
    </div>
  )
}