import axios from "axios";
const API_KEY = "v^1.1#i^1#p^1#r^0#f^0#I^3#t^H4sIAAAAAAAAAOVYe2wURRjv9a6FWipGUbD4uG5BE8nu7e7d7d2t3OnRFnsC7dErFZqUOrs7W4be7R67c1zLy7NBUINRQgyxJlqhgMRHFIlgQogh8Q//aRQNQaPgq7xCfGAMmjTV3b2jXCvh1Uts4v1zmZlvvvn9fvN9M98OnSkte2hT/aaLFbZJxX0ZOlNsszHldFlpyZxb7cWVJUV0noGtLzMr4+ixn5mrg0Q8yTdBPakqOnR2JeKKzludQSKlKbwKdKTzCkhAncciHwsvWsizFM0nNRWrohonnJHaIOEXRIYB0M8GGB8EgtGpXHLZrAYJj1fyQo/kdXOcLDKiOa7rKRhRdAwUHCRYmnWTtIdkPc2Mn3cHeMZL+RiulXC2QE1HqmKYUDQRstDy1lwtD+rVkQJdhxo2nBChSHh+rDEcqa1raJ7ryvMVyskQwwCn9NGtGlWCzhYQT8GrL6Nb1nwsJYpQ1wlXKLvCaKd8+BKYm4BvKS2KUoBmPQByMicCKBZEyvmqlgD46jjMHiSRsmXKQwUj3H0tRQ01hJVQxLlWg+EiUus0/xanQBzJCGpBom5eeFk4GiVCYQWrClJryDQUJLiajDbVkrJHEOQAJ0uk389wnB/A3DJZXzmRx6xToyoSMiXTnQ0qngcNzHCsMmyeMoZRo9KohWVs4smzY+kRBdlWc0uze5jCKxRzV2HCkMFpNa+t/8hsjDUkpDAc8TB2wBIoSIBkEknE2EErEnPB06UHiRUYJ3mXK51OU2k3pWodLpamGdfSRQtj4gqYAETW1sx1wx5dewKJLCoiNGbqiMfdSQNLlxGpBgClgwh5fF4368vpPhpWaGzvvzryOLtG50Oh8sMnBQI+gfawEuPjaMFfiPwI5ULUZeKAAugmE0DrhDgZByIkRSPOUgmoIYl3e2XW7ZchKXEBmfQEZJkUvBJHMjKENISCIAb8/580ud5Aj0FRg7hQkV6YKIexDklyNa3mFjdEwyldnYNSLFoWkZY0eZsiqSdQdI2MAi2rsH9NJHi9uXBF8jVxZCjTbKxfMAHMXC+ICPWqjqE0LnoxUU3CqBpHYvfE2mC3JkWBhrtjMB43OsZFMpxMRgp2UheG3g0dEjfHuqD3039xN12RlW4G7MRiZc7XDQcgiSjz9qFENeFSgVF2uICZ60nUbqEeF29k1KwTirVBMssWSdlik7IoU/pqkdKgrqY0o86mGs3qq1nthIpxm2FNjceh1sKMO5sTiRQGQhxOtLQuQIAjMMGuWobzs26O8Xq94+IlWhdp+0Q7kgp4EDtCN1ZQu0Z/24eKrB/TYztC99gOF9ts9Fx6NlNNV5XalzjsUyp1hCGFgEzpqEMxvlk1SHXC7iRAWvEdRRfp06+K5+v3Pt85nF516uH1RflPC31t9IyRx4UyO1Oe99JA33N5pISZOr2CdRvVuYfxuwOMt5WuvjzqYO5yTJv/ct+B9nXHopX7qk5NfvHbP3sng8foihEjm62kyNFjK1q78+v7//qkTel6elLv5kEQ+K3hudoXyIGW76t3Sgs2ZOoXEG/vyEyrctg+nzL8ftmJ3b2PHgtuO35xj/vH3w+WtXf2nn/3vfsqG0vf3L9r+4lvvliz/NNbdj9Y5ti29p3+AfF1rqX/M9sQUXV7jNw7fePZD9JHPgodsmfq6sh9y5fu+u6g8IZ7z/CW8tsOtQ6+suvQz3bgXjz0B13d7XWePDpje/m5M88eHvq1/yf1w9nDP7Tb6mfdCYZOX9haOy84+PHUC49XVP/95e514aZzWzb0D3jW/uLY/MyqAfvMR9afGg4P3b1QPr2xd8fRWXjrS8e3MF8deGDlWzOK26Snlh3ef/LJ0BH7zHtfGzg72Jbdy38AW+IOcPQRAAA="
const SEARCH_URL = "https://fakestoreapi.com/products?limit=5";
const EBAY_URL = "https://api.ebay.com/buy/browse/v1/item_summary/search?q="
const api = axios.create();

export const getProductsbyKeyword = async (keyword) => {
    const response = await api.get(`${SEARCH_URL}`, {
        params: {keyword: 'iphone', country: 'US', category: 'aps'}
    }
        );
    return response.data;
    };

export const getProductsbyKeyword2 = async (keyword) => {
    console.log(`keyword: ${keyword}`)
    const response = await axios.get(`https://api.ebay.com/buy/browse/v1/item_summary/search?q=${keyword}&limit=3`
    , {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        }
      })
      console.log(response)
      return response.data;
    };


export const getProducts = async () => {
    const response = await api.get(`${EBAY_URL}fjallraven&limit=5`
    , {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        }
      })
      return response.data;
    };

export const getProductById = async (productID) => {
        const response = await api.get(`${SEARCH_URL}/${productID}`);
        return response;
};

export const getProductById2 = async (productID) => {
    const response = await axios.get(`https://api.ebay.com/buy/browse/v1/item/${productID}`
    , {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        }
      })
      console.log(response)
      return response.data;
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
      
