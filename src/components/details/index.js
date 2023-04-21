
import React, { useEffect, useState, useRef } from "react";
import { useParams, NavLink, Link } from "react-router-dom";
import * as productService from "../../services/product-service.js"

const Details = () => {

    const [product, setProducts] = useState([]);
    const [ourProduct, setOurProduct] = useState({});
    const { id } = useParams();

    console.log(id); 

    const fetchProductByID = async () => {
        const response = await productService.getProductById(id);
        setProducts(response.data);
    };

    // const fetchProductByIDfromDatabase = async () => {
    //     const response = await productService.fetchMemeById(productID);
    //     console.log(response.data);
    //     setOurMeme(response.data);
    // };

    useEffect(() => {
        fetchProductByID();
        // fetchProductByIDfromDatabase();
    }, [])

    return (
        <div>
            <h1>Details</h1>
            <h3>{product.title}</h3>
            <img src={product.image} alt="product image" width="100" height="100" />
            <p>{product.description}</p>
            <p> ${product.price}</p>
            <button className="btn btn-primary">Sign in to add review</button>

        </div>
    )
}
export default Details;

