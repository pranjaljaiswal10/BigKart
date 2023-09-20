import {MdDelete} from "react-icons/md"
import { useWishlist } from "../utils/wishlistContext";
import { useCart } from "../utils/cartContext";
const Wishlist=()=>{
  const {wishlistState,wishlistDispatch}=useWishlist();
  const {cartDispatch}=useCart();
  const handleCart=(item)=>{
    cartDispatch({type:"ADD_TO_CART",payload:item})
  }
    return(
      wishlistState.wishlist.length===0?<p>Empty Wishlist.You have no item in your wishlist.</p>:
      <>
      <span>My Wishlist({wishlistState.wishlist.length})</span>
      <div className="wishlist">
      {
        wishlistState.wishlist.map(item=>{
            return(
                <div className="card" key={item.id}>
                   <img src={item.image} alt="" />
                    <button onClick={()=>{wishlistDispatch({type:"REMOVE_FROM_WISHLIST",payload:item.id})}}><MdDelete/></button>
                    <div className="title"><span>Brand:</span>{item.title}</div>
                    <span className="price">${item.price}</span>
                    <button onClick={()=>{handleCart(item)}}>Add to Cart</button>
                </div>
            )
        })
      }
      </div>
       </>
    )
}
export default Wishlist;