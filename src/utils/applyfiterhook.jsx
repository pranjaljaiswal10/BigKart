import { useFilter } from "./filterContext";
import { sortProduct } from "./helperfn";



const useApplyFilter=(product)=>{
  const {filterState}=useFilter();
  let filterData=[...product]
  const filterPrice=filterState.priceRange!==10?filterData.filter(item=>{
   return item.price<=filterState.priceRange
  }):filterData;  
const filterRating=filterState.rating?filterPrice.filter(item=>item.rating.rate>=filterState.rating)
  :filterPrice;
  const filterCategory=filterState.selectedCategory.length!==0?filterRating.filter(item=>filterState.selectedCategory.includes(item.category)):filterRating;
  const searchPrduct=filterState.searchTxt.trim()!==""?filterCategory.filter(item=>item.title.toLowerCase().includes(filterState.searchTxt.toLowerCase())):filterCategory;
  const sortProducts=filterState.sortBy!==null? sortProduct(searchPrduct,filterState.sortBy):searchPrduct;
  return sortProducts;
}
export default useApplyFilter;