import React, { useEffect, useState, useRef } from "react";
import { useParams, NavLink, Link } from "react-router-dom";
import * as productService from "../../services/product-service.js";
import * as reviewService from "../../services/review-service.js";

const Details = () => {
  const [product, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

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
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Details</h1>
      <div className="row">
        <div className="col-md-4">
          <img
            src={product.image}
            alt="product image"
            className="img-fluid rounded"
            // style={{height:500,}}
          />
        </div>
        <div className="col-md-6">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p> ${product.price}</p>
          <button className="btn btn-primary">Sign in to add review</button>
          {/* reviews */}
      <h2 className="my-4">Reviews</h2>
      <ul className="list-group">
        {reviews.map((review) => (
          <li className="list-group-item" key={review.id}>
            <Link to={`/profile`} className="links">
              {review && review.username}:
            </Link>
            <p>{review && review.comment}</p>
          </li>
        ))}
      </ul>
        </div>
      </div>

      
    </div>
  );
};

export default Details;
