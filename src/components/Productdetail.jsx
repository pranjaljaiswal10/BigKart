import { useParams, } from "react-router-dom";
import {useState,useEffect} from "react";
import {useWishlist} from "../utils/useWishlist";
import {useCart} from "../utils/useCart"
const Productdetail=()=>{
  const {cartDispatch}=useCart();
  const {wishlistDispatch}=useWishlist()
  const {id}=useParams();
  const [product,setProduct]=useState(null)
  useEffect(()=>{
  getData()
  },[])
  async function getData(){
    const response=await fetch(`https://dummyjson.com/products/${id}`)
    const json=await response.json()
    console.log(json)
    setProduct(json);
  }

if(product===null) return <h1>Data is loading...</h1>
const handleWishlist=(product)=>{
  wishlistDispatch({type:"ADD_TO_WISHLIST",payload:product})
}
const handleCart=(product)=>{
  product.quantity=1;
  cartDispatch({type:"ADD_TO_CART",payload:product})
}


 return(

  <div className="productdetail">
  <img src={`${product.images[0]}`} alt={product.name} />
  <big>Brand: <span>{product.brand}</span></big>
  <big>{product.title}</big>
  <button onClick={()=>handleWishlist(product)}>❤</button>
  <p>{product.description}</p>
  <div className="price">
  <span>&#8377;{product.price}</span>
  <span>&#8377;{}</span>
  <span>{product.discountPercentage}Off</span>
  </div>
  <button onClick={()=>handleCart(product)}>AddtoCart</button>
  </div>
)
}
export default Productdetail;