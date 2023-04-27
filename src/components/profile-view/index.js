import React, { useCallback, useEffect, useState } from "react";
import * as productService from "../../services/product-service.js";
import * as reviewService from "../../services/review-service.js";
import * as userService from "../../services/user-service.js";
import { useParams, Link, useNavigate } from "react-router-dom";


const ProfileView = () => {
    const [isReady, setIsReady] = useState(false);
    const [user, setUser] = useState({});
    const { userID } = useParams();

    const [reviews, setReviews] = useState([]);
    const [products, setProducts] = useState([]);

    const checkUser = async () => {
        const user = await userService.getUserById(userID);
        setUser(user);
        return user;
    }

    // const fetchReviews = async () => {
    //     const review = await reviewService.findReviewsByUserId(userID);
    //     setReviews(review);
    // }
    const fetchProducts = async () => {
        // wait for reviews to be fetched
        const reviews = await fetchReviews();
        setReviews(reviews);

        // for every review in reviews, create a list of products
        const products = await Promise.all(reviews.map(async (r) => {
            const product = await productService.getProductById2(r.productID);
            return product;
        }));

        setProducts(products);
    }

    const fetchReviews = async () => {
        return reviewService.findReviewsByUserId(userID)
    }
    useEffect(() => {
        checkUser()
        fetchProducts();
    }, []);

    useEffect(() => {
        console.log(products);
        setIsReady(true);
    }, [products]);



    if (!isReady) {

        return (
            <div className="container">
                <h1 className="text-center my-4">Loading...</h1>
            </div>
        );
    }

    // only display the username and the list of products with their reviews below
    return (
        <>
            {reviews && (
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
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="card-body">
                                        <Link className="text-decoration-none" to={`/details/${product.itemId}`}>
                                            <h3 className="card-title">{product.title}</h3>
                                        </Link>
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text mb-0">Condition: {product.condition}</p>
                                            <p className="card-text mb-0">${product.price.value}</p>
                                        </div>
                                        <p className="card-text">Review: {reviews[products.indexOf(product)].text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}




export default ProfileView;

