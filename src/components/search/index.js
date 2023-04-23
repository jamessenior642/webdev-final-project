import React, { useEffect, useState } from "react";
import { getProductsbyKeyword2 } from "../../services/product-service";
import { Link, useParams } from "react-router-dom";

const Search = () => {
    const { productSearch } = useParams();
    const [products, setProducts] = useState([]);


  const productList = async () => {
    const keyword =  productSearch;
    const response = await getProductsbyKeyword2(productSearch);
    setProducts(response.itemSummaries);
  };

  useEffect(() => {
    productList();
  }, []);

  return (
    <div className="container"> 
      <h1 className="text-center my-4">Search Results</h1>
      <div className="row"> 
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.itemId}>
            <div className="card h-100"> 
              <img
                src={product.image.imageUrl}
                alt="product"
                className="card-img-top"
                height="200"
                style={{ objectFit: "cover" }}
              />
              <div className="card-body">
                <Link className = "text-decoration-none" to={`/details/${product.itemId}`}>
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
  );
};

export default Search;
