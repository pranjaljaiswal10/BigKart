import { useCart } from "../utils/cartContext";
import { useNavigate } from "react-router-dom";
import usepayment from "./payment";
const Cart=()=>{
    const navigate = useNavigate();
  const { cartState, cartDispatch } = useCart();
  const charges={
    shipping:5,
    tax:5
  }
  const totalPrice = cartState.cart.reduce((Total, item) => {
    return Total +( item.price * item.quantity);
  }, 0)
  const totalPayment=totalPrice+charges.shipping+charges.tax;
  console.log(cartState.cart)
  const launchRazorPay=usepayment(totalPayment)
  const handleCheckout=()=>{
    launchRazorPay()
    cartDispatch({type:"CLEAR_CART"})
  }
    return(
        cartState.cart.length === 0 ? (<div className="emptycart"> <p>Your cart is empty!Add items to it now.</p>
        <button onClick={() => { navigate("/") }}>Shop now</button>
      </div>) : (<>
        <h1>My Cart({cartState.cart.length})</h1>
        <div className="cart">
        <div className="cartItem">
        {
          
          cartState.cart.map(item => (
          <div className="item"  key={item.id}>
          <div className="image"> 
              <img src={item.image} alt="" />
             <div className="btn">
                   <button onClick={() => { cartDispatch({ type: "DECREASE_QUANTITY", payload: item.id }) }}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => { cartDispatch({ type: "INCREASE_QUANTITY", payload: item.id }) }}>+</button>
            </div>
            </div>
             <div className="detail">
             <span>Brand:</span>
             <div className="title">{item.title}</div>
             <div className="price">${item.price}</div>    
               </div>
               </div>
    
        ))
      }
      </div>
      <div className="ordersummary">
      <span>Order Summary</span>
        <div >
              <div className="detail"><div className="flex">Subtotal</div> <span>${Math.round(totalPrice)}</span> </div>
              <div className="detail"><div className="flex">Shipping Estimate</div> <span>${charges.shipping}</span></div>
              <div className="detail"><div className="flex">Tax Estimate</div> <span>${charges.tax}</span></div>
              <div className="detail"><div className="flex">Order Total</div>  <span>${Math.round(totalPayment)}</span></div>    
              <div className="btn"><button onClick={handleCheckout}>Checkout</button></div>
              </div>
              </div>
             
              </div>
        
        </>
      )
       )
    }
export default Cart;