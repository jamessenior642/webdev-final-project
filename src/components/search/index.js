import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/product-service";
import { Link } from "react-router-dom";

const Search = () => {
  const [products, setProducts] = useState([]);
  const productList = async () => {
    const response = await getProducts();
    setProducts(response.data);
  };

  useEffect(() => {
    productList();
  }, []);

  return (
    <div className="container"> 
      <h1 className="text-center my-4">Search Results</h1>
      <div className="row"> 
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100"> 
              <img
                src={"img from api"}
                alt="product"
                className="card-img-top"
                height="200"
                style={{ objectFit: "cover" }}
              />
              <div className="card-body">
                <Link className = "text-decoration-none" to={`/details/${product.id}`}>
                  <h3 className="card-title">title from api</h3>
                </Link>
                <p className="card-text">description from api</p>
                <p className="card-text">$price from api</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
