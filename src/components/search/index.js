import { getProductsbyKeyword2 } from "../../services/product-service";
import React, { useEffect, useState } from 'react';




const Search = () => {
    const [products, setProducts] = useState([]);
const productList  = async () => {
    const response = await getProductsbyKeyword2("IPhone");
    setProducts(response.data);
}        

useEffect(() => {
    productList();
    console.log(products)
}, [])

    return (
        <div>
            <h1>Search</h1>

        </div>
    )
}
export default Search;