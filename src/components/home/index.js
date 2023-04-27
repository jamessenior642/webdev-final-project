import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/product-service";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const productList = async () => {
    const response = await getProducts();
    setProducts(response.itemSummaries);
  };

  useEffect(() => {
    productList();
  }, []);

  return (
    <div className="container"> 
      <h1 className="text-center my-4">Home</h1>
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
</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
