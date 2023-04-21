import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/product-service';


const Home = () => {

    const [products, setProducts] = useState([]);
    const productList  = async () => {
        const response = await getProducts();
        console.log(response.data);
        setProducts(response.data);
    }        

    useEffect(() => {
        productList();
    }, [])

    //list all products
    return (
        <div>
            <h1>Home</h1>
            
            <ul className="list-group">
                {products.map((products) =>
                <li className="list-group-item col-5">
                    <h3>{products.title}</h3>
                    <img src={products.image} alt="product image" width="100" height="100"/>
                    <p>{products.description}</p>
                    <p> ${products.price}</p>
                    <button className="btn btn-primary">Sign in to add review</button>

                    </li>
                )}
               
            </ul> 

            
        </div>
    )
}

export default Home;