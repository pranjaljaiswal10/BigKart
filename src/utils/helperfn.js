export function sortProduct(product,sortBy)
{
    if(sortBy=="lowtohigh")
    {
        product.sort((a,b)=>a.price-b.price);
    }
    else if(sortBy==="hightolow") {
        product.sort((a,b)=>b.price-a.price)
    }
    return product;
}