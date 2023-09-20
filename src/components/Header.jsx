import { Link } from "react-router-dom";
import { useCart } from "../utils/cartContext";
import { useAuth } from "../utils/userContext";
import {MdFavorite} from "react-icons/md"
import {AiOutlineShoppingCart} from "react-icons/ai"
const Header=()=>{
    const {cartState}=useCart();
    const {userObject}=useAuth()
    return(
    <header>
       <Link to="/">
        <div className="logo">
        
            <img src="https://scontent.fknu1-1.fna.fbcdn.net/v/t39.30808-6/302240292_474152434722010_5176801738778183315_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=tVsE3V2BkVMAX-QChJP&_nc_ht=scontent.fknu1-1.fna&oh=00_AfC5akDe4XPxrd-JDDZ6DSrModFN9-NtyEJ0svri7L5RoQ&oe=650CAFE7" alt="" />
            <span>BigKart</span>
        </div>
        </Link>
    <nav>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>{userObject?<Link to="/profile">Profile</Link> :<Link to="login">Login</Link>}</li>
        <li><Link to="wishlist"><MdFavorite/></Link></li>
        <li><Link to="/cart">{cartState.cart.length}<AiOutlineShoppingCart/></Link></li>
    </ul>
    </nav>
    </header>
    )
}
export default Header;