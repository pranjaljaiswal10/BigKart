import {useCart} from "../utils/useCart"
import { useNavigate } from "react-router-dom";
const Cart=()=>{
    const navigate=useNavigate();
     const {cartState,cartDispatch}=useCart();
     console.log(cartState.cart);
     const totalPrice=cartState.cart.reduce((Total,item)=>{
        return Total+item.price*item.quantity;
    },0 )
     console.log(totalPrice)
    return(

cartState.cart.length===0?(<> <p>Your cart is empty!Add items to it now.</p>
<button onClick={()=>{navigate("/")}}>Shop now</button> 
</>):(<>
     <h1>My Cart{cartState.cart.length}</h1>
    {
        cartState.cart.map(item=>(
            <div className="cartItem" key={item.id}>
            <img src={item.images[0]} alt={item.title} />
            <button onClick={()=>{cartDispatch({type:"DECREASE_QUANTITY",payload:item.id})}}>-</button>
            <small>{item.quantity}</small>
            <button onClick={()=>{cartDispatch({type:"INCREASE_QUANTITY",payload:item.id})}}>+</button>
          <big>{item.title}</big>
          <big>Brand: <span>{item.brand}</span></big>
          <div className="price">
            <span>&#8377;{item.price*item.quantity}</span>
            <span>&#8377;{}</span>
            <span>{item.discountPercentage}%</span>
          </div>
          <button onClick={()=>{cartDispatch({type:"REMOVE_FROM_CART",payload:item.id})}}>Remove</button>
          <div className="price-detail">
            <span>Price({cartState.cart.length}items)</span>
          </div>
          <p>You will save &#8377; on this order</p>
          <button>Checkout</button>
            </div>
        ))
    }
</>
 )
    )
}
export default Cart;