import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
const Body = () => {
   const [allProduct, setAllProduct] = useState([])
   const [filteredProduct, setFilteredProduct] = useState([])
   useEffect(() => {
      getData()
   }, [])
   async function getData() {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      setAllProduct(data.products)
      setFilteredProduct(data.products)
   }
   {console.log(filteredProduct)}
   return (
      <div className="product-list">
         {
            filteredProduct.map(product => {
               return (
                  <Link to={`/singleproduct/${product.id}`} key={product.id}>
                  <ProductCard {...product}  />
               </Link>
               )
            })
         }
      </div>
   )
}
export default Body;
const ProductCard = ({ title, images, brand, price,discountPercentage }) => {
   return (
      <div className="card">
      <img src={images[0]} alt="" />
  <strong>Brand:{brand}</strong>
  <small>{title}</small>
  <div className="price">
  <span>{price}</span>
  <span>{}</span>
  <span>{discountPercentage}Off</span>
  </div>
      </div>
  
   )
}