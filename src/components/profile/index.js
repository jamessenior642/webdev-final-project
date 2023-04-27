import React, {useEffect, useState} from "react";
import * as service from "../../services/auth-service";
import { useProfile } from "../../context/profile-context";
import * as userService from "../../services/user-service";
import { Link } from "react-router-dom";
import * as productService from "../../services/product-service";
import * as reviewService from "../../services/review-service";

const Profile = () => {
  const { profile, loading } = useProfile();
  const [username, setUsername] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [err, setError] = React.useState(false);
  const userID = profile._id;
  const [reviews, setReviews] = useState([]);
  const [products, setProducts] = useState([]);
  
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

  const checkUser = async () => {
    const user = await userService.getUserByEmail(profile.email);
    setUsername(user.username);
    setEmail(user.email);
    setPassword(user.password);
  };

  React.useEffect(() => {
    checkUser();
    fetchProducts()
  }, []);

  return (
    <div className="container pb-5">
      <h1 className="text-center my-5">Profile</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Email: {profile.email}</h5>
              <h5 className="card-title">Username: {profile.username}</h5>
              <form>
                <div className="form-group mt-4">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-primary mt-4"
                  onClick={async () => {
                    try {
                      await userService.updateUser(profile._id, username, email, password);
                      setError(false);
                    } catch (e) {
                      setError(true);
                    }
                  }}
                >
                  Update
                </button>
              </form>
              {err && (
                <div className="alert alert-danger alert-dismissible mt-3" role="alert">
                  Please make sure you have a valid login!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="reviews my-5">
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
                        <p className="card-text">Review: {reviews[products.indexOf(product)].text}</p>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
    </div>
  );
};

export default Profile;