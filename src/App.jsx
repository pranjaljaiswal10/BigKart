import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Error from "./components/Error"
import About from "./components/About"
import Contact from "./components/Contact"
import Login from "./components/Login";
import Profile from "./components/Profile"
import Cart from "./components/Cart"
import Wishlist from "./components/Wishlist";
import { WhishlistProvider } from "./utils/wishlistContext"
import { CartProvider } from "./utils/cartContext"
import { AuthProvider } from "./utils/userContext"
import { FilterProvider } from "./utils/filterContext"
import PrivateRouter from "./components/PrivateRouter"
import Productdetail from "./components/ProductDetail"
import { Outlet,createBrowserRouter,RouterProvider } from "react-router-dom"
import "./App.css"
 

const AppLayout=()=>{
  return(
    <>
    <AuthProvider>
    <CartProvider>
    <WhishlistProvider>
    <FilterProvider>
    <Header/>
    <Outlet/>
    </FilterProvider>
    </WhishlistProvider>
    </CartProvider>
    </AuthProvider>
    <Footer/>
  </>
  )
}

const router=createBrowserRouter([{
 path:"/",
 element:<AppLayout/>,
 errorElement:<Error/>,
 children:[{
   path:"/",
  element:<Body/>,
 },{
  path:"/about",
  element:<About/>,
},{
  path:"/contact",
  element:<Contact/>
},{
  path:"/login",
  element:<Login/>
},{
  path:"/profile",
  element:<Profile/>
},{
  path:"/Cart",
  element:<PrivateRouter><Cart/></PrivateRouter>
},{
  path:"/Wishlist",
  element:<PrivateRouter><Wishlist/></PrivateRouter>
},{
  path:"/singleProduct/:id",
  element:<Productdetail/>
}
]}])


const App=()=>{
  return <RouterProvider router={router}/>
}
export default App
