
import React, { useEffect, useState, useRef } from "react";
import { useParams, NavLink, Link } from "react-router-dom";
import * as productService from "../../services/product-service.js"
import * as reviewService from "../../services/review-service.js"

const Details = () => {

    const [product, setProducts] = useState([]);
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();

    console.log(id);

    const fetchProductByID = async () => {
        const response = await productService.getProductById(id);
        setProducts(response.data);
    };

    const findReviews = async () => {
        const reviews = await reviewService.findReviewsByProductID(id);
        setReviews(reviews);
      };

    useEffect(() => {
        fetchProductByID();
        findReviews();

    }, [])

    
    return (
        <div>
            <h1>Details</h1>
            <h3>{product.title}</h3>
            <img src={product.image} alt="product image" width="100" height="100" />
            <p>{product.description}</p>
            <p> ${product.price}</p>
            <button className="btn btn-primary">Sign in to add review</button>

        {/* reviews*/}
        <ul className="list-group pt-1 mb-4">
        {reviews.map((review) => (
          <li className="list-group-item">
            <Link to={`/profile`} className="links">
              {review && review.username}:
            </Link>
            <p>{review && review.comment}</p>
          </li>
        ))}{" "}
      </ul>

        </div>
    )
}
export default Details;

