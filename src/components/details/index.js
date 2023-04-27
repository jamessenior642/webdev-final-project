import React, {useEffect, useState, useRef} from "react";
import {useParams, Link} from "react-router-dom";
import {InputGroup, FormControl, Button} from "react-bootstrap";
import * as productService from "../../services/product-service.js";
import * as reviewService from "../../services/review-service.js";
import {useProfile} from "../../context/profile-context.js";
import SecureContent from "../../context/secure-context.js"

const Details = () => {
	const [product, setProducts] = useState('');
	const [reviews, setReviews] = useState([]);
	const {checkLoggedIn} = useProfile();
	const {id} = useParams();
	const [reviewText, setReviewText] = useState('');
	
	const fetchProductByID = async () => {
		const response = await productService.getProductById2(id);
		setProducts({
			...product,
			...response
		});
		console.log(response)
	};
	
	const findReviews = async () => {
		const reviews = await reviewService.findReviewsByProductID(id);
		setReviews(reviews);
	};
	
	
	const handleReview = async () => {
		const curSessionUser = await checkLoggedIn();
		console.log("posting review")
		try {
			const actualReview = await reviewService.postReview(
				product.itemId,
				{
					text: reviewText,
					reviewer: curSessionUser._id,
					username: curSessionUser.username,
				}
			);
			console.log(product);
			setReviews([...reviews, actualReview]);
		} catch (e) {
			console.log(e);
		}
	};
	
	useEffect(() => {
		fetchProductByID();
		findReviews();
	}, [id]);
	
	return (
		<>
			{product && (
				<div className="container">
					<h1 className="text-center my-4">Details</h1>
					<div className="row">
						<div className="col-md-4">
							<img
								src={product.image.imageUrl}
								alt="product image"
								className="img-fluid rounded"
								// style={{height:500,}}
							/>
						</div>
						<div className="col-md-6">
							<h3>{product.title}</h3>
							<p>Condition: {product.condition}</p>
							<p>${product.price.value}</p>
							{/* reviews */}
							<h2 className="my-4">Reviews</h2>
							<SecureContent
								// sign in button
								nonloggedincontent={<Link to="/login">
									<button className="btn btn-primary">Sign in to add review</button>
								</Link>}
								// review form
								loggedincontent={<InputGroup className="mb-3">
									<FormControl
										value={reviewText}
										onChange={(e) => setReviewText(e.target.value)}
										placeholder="Enter rating"
										aria-label="review"
										aria-describedby="button-addon2"
									/>
									<Button onClick={handleReview} variant="primary" id="button-addon2">
										Post
									</Button>
								</InputGroup>}/>
              {reviews.length > 0 ? 
							<ul className="list-group">
								{reviews.map((review) => (
									<li className="list-group-item">
										<h2>
                      <Link to={`/profile-view/${review.userID}`} className="links">
										  {review && review.username}
										</Link> 
                    </h2>
										<p>"{review.text}"</p>
									</li>
								))}
							</ul> : <h4>Be the first to review!</h4>}

						</div>
					</div>
				</div>
			)}
			</>
	);
};

export default Details;
