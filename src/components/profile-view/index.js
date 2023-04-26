import React, {useEffect, useState} from "react";
import * as productService from "../../services/product-service.js";
import * as reviewService from "../../services/review-service.js";
import * as userService from "../../services/user-service.js";
import {useParams, Link, useNavigate} from "react-router-dom";


const ProfileView = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const {userID} = useParams();

    const [reviews, setReviews] = useState([]);
    const [products, setProducts] = useState([]);

    const checkUser = async () => {
        const user = await userService.getUserById(userID);
        setUser(user);
        return user;
    }

    const fetchReviews = async () => {
        const review = await reviewService.findReviewsByUserId(userID);
        setReviews(review);
    }
    const fetchProducts = async () => {
        // for every review in reviews, find the product
        const products = await Promise.all(reviews.map(async (review) => {
            const product = await productService.getProductById(review.productID);
            return product;
        }));
        setProducts(products);
    }

    useEffect(() => {
        checkUser();
        fetchReviews();
        fetchReviews();
    }
    , [userID]);

    // only display the username and the list of products with their reviews below
    return (user? (
        <div className="container">
            <h1 className="text-center my-4">{user.username}'s Reviews</h1>
            <h2>Reviewed Products</h2>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-4" key={product.itemID}>
                        <div className="card h-100">
                            <img
                                src={product.image.imageUrl}
                                alt="product"
                                className="card-img-top"
                                height="200"
                                style={{objectFit: "cover"}}
                            />
                            <div className="card-body">
                                <Link className="text-decoration-none" to={`/details/${product.itemId}`}>
                                    <h3 className="card-title">{product.title}</h3>
                                </Link>
                                <p className="card-text">Condition: {product.condition}</p>
                                <p className="card-text">${product.price.value}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ) : <div></div>);
}

            


export default ProfileView;

