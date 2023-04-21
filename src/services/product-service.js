import axios from "axios";
const product_URL = "https://real-time-product-search.p.rapidapi.com/search";
const API_URL = "https://fakestoreapi.com/products?limit=5";
const api = axios.create();

export const getProductsbyKeyword = async (keyword) => {
    const response = await api.get(`${API_URL}`, {
        params: {keyword: 'iphone', country: 'US', category: 'aps'}
    }
        );
    return response.data;
    };

export const getProducts = async () => {
    const response = await api.get(`${API_URL}`);
    return response;
    };

    // const options = {
    //     method: 'GET',
    //     url: 'https://amazon-product-reviews-keywords.p.rapidapi.com/product/search',
    //     params: {keyword: 'iphone', country: 'US', category: 'aps'},
    //     headers: {
    //       'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    //       'X-RapidAPI-Host': 'amazon-product-reviews-keywords.p.rapidapi.com'
    //     }
    //   };
      