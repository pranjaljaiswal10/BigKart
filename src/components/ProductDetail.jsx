import { useState,useEffect } from "react";
import {useParams} from "react-router-dom";
import {MdFavorite} from "react-icons/md";
import {AiFillStar} from "react-icons/ai"
import { useCart } from "../utils/cartContext";
import { useWishlist } from "../utils/wishlistContext";


const Productdetail=()=>{
  const {wishlistDispatch}=useWishlist();
  const {cartDispatch,cartState}=useCart();
  const [product,setProduct]=useState(null)
  const {id}=useParams()
  useEffect(()=>{
  fetchData()
  },[])
async function fetchData(){
  const response=await fetch(`https://fakestoreapi.com/products/${id}`)
  const data=await response.json()
  console.log(data);
  setProduct(data);
}
if(!product) return null

const handleWishlist=()=>{
  wishlistDispatch({type:"ADD_TO_WISHLIST",payload:product})
}
const handleAddCart=()=>{
  product.quantity=1;
  cartDispatch({type:"ADD_TO_CART",payload:product})
}
const handleIncreaseQuantity=()=>{
  cartDispatch({type:"INCREASE_QUANTITY",payload:product.id})
}
const isExist=cartState.cart.find(item=>item.id===product.id)
    return(
  <>
  <div className="productdetail">
    <div className="image">
  <img src={product.image} alt="" />
   </div>
   <div className="detail">
    <div>BRAND</div>
   <div className="title">{product.title}</div>
   <span className="rating"><AiFillStar/>{product.rating.rate}</span>
   <p>{product.description}</p>
   <div className="price">
   <span>${product.price}</span>
   <div>
  {isExist===undefined?<button onClick={handleAddCart}>add to Cart</button>:<button onClick={handleIncreaseQuantity}>add to cart</button>}
   <button onClick={handleWishlist}><MdFavorite/></button>
  </div>
  </div>
   </div> 
  </div>
  </>
    )
}
export default Productdetail;