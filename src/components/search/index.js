import React, { useEffect, useState } from "react";
import { getProductsbyKeyword2 } from "../../services/product-service";
import { Link, useParams } from "react-router-dom";

const Search = () => {
    const { searchQuery } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productList = async () => {
            console.log(`product search: ${searchQuery}`)
            const response = await getProductsbyKeyword2(searchQuery);
            setProducts(response.itemSummaries);
        };
        productList();
    }, [searchQuery]);

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

export default Search;
