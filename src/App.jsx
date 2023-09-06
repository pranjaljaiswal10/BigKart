import Header from "./components/Header"
import Footer from "./components/Footer"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import Cart from "./components/Cart"
import Wishlist from "./components/Wishlist"
import Productdetail from "./components/Productdetail"
import { WishlistProvider } from "./utils/useWishlist"
import { CartProvider } from "./utils/useCart"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"

const AppLayout = () => {
    return (
        <>
            <CartProvider>
                <WishlistProvider>
                    <Header />
                    <Outlet />
                </WishlistProvider>
            </CartProvider>
            <Footer />
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            }, {
                path: "/contact",
                element: <Contact />
            }, {
                path: "/wishlist",
                element: <Wishlist />
            }, {
                path: "/cart",
                element: <Cart />
            }, {
                path: "/singleproduct/:id",
                element: <Productdetail />
            }
        ]
    }
])

const App = () => {
    return <RouterProvider router={router} />
}
export default App;