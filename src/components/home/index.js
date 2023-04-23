import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/product-service';
import { Link } from 'react-router-dom';


const Home = () => {

    const [products, setProducts] = useState([]);
    const productList  = async () => {
        const response = await getProducts();
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
                    <Link to={`/details/${products.id}`}><h3>{products.title}</h3></Link>
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