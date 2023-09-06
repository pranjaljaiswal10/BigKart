import {useWishlist} from "../utils/useWishlist"
const Wishlist=()=>{
    const {wishlistState,wishlistDispatch}=useWishlist();
    console.log(wishlistState.wishlist)
    return(
       wishlistState.wishlist.length===0?<p>Empty Wishlist.You have no item in your wishlist.</p>:
       <>
       <h1>My Wishlist({wishlistState.wishlist.length})</h1>
      {
        wishlistState.wishlist.map(item=>{
            return(
                <div className="wishlist" key={item.id}>
                <img src={item.images[0]} alt="" />
                <big>{item.title}</big>
          <big>Brand: <span>{item.brand}</span></big>
          <button onClick={()=>{wishlistDispatch({type:"REMOVE_FROM_WISHLIST",payload:item.id})}}>remove</button>
          <div className="price">
            <span>&#8377;{item.price}</span>
            <span>&#8377;{}</span>
            <span>{item.discountPercentage}%</span>
          </div>
                </div>
            )
        })
      }
       </>
    )
}
export default Wishlist;