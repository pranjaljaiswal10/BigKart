import Header from "./components/Header"
import Footer from "./components/Footer"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import Cart from "./components/Cart"
import Productdetail from "./components/Productdetail"

import {CartProvider} from "./utils/useCart"
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom"

const AppLayout=()=>{
    return(
      <>
      <CartProvider>
            <Header/>
            <Outlet/>
      </CartProvider>
      <Footer/>
      </>
    )
}

const router=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },,{
                path:"/cart",
                element:<Cart/>
            },{
                path:"/singleproduct/:id",
                element:<Productdetail/>
            }
        ]
    }
])

const App=()=>{
    return <RouterProvider router={router}/>
}
export default App;