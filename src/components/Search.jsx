import { useFilter } from "../utils/filterContext"
const Search=()=>{
    const {filterState,filterDispatch}=useFilter()
    return(
        <div className="search">
        <input type="text" placeholder="Search..." value={filterState.searchTxt} onChange={(e)=>{filterDispatch({type:"SEARCH_CHANGE",payload:e.target.value})}} />
        <button>Search</button>
     </div>
    )
}
export default Search;