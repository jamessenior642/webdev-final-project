import axios from "axios";
const API_KEY = "v^1.1#i^1#p^1#r^0#I^3#f^0#t^H4sIAAAAAAAAAOVYe2wURRjvtVdMg4WYykMg5lhQE3D3Zndv77H2Tq8tpGdKe/T6gBrBfcy2Q+92tztzvZYEbSqCKA38IT6CGJDEgJoCkYQ/DEJQQ3yENIQABqKEGJFoYogSRIpx70G5VsKrl9jE++cyM9988/v95vvmmx3QN6lswbradVfKHQ8Ub+8DfcUOBzsZlE0qXTilpHhWaRHIM3Bs75vf5+wv+bkSS4m4KTZCbBo6hq6eRFzHYqYzSCUtXTQkjLCoSwmIRaKIsfCSOpFjgGhaBjEUI065IjVBShF4lmdlWfBwnF+SFbtXv+GzyQhSGi94gSbzHlbVZAD89jjGSRjRMZF0EqQ4wPE08NCc0MQKouAVgcDwwNdGuVqghZGh2yYMoEIZuGJmrpWH9fZQJYyhRWwnVCgSXhxrCEdqFtU3VbrzfIVyOsSIRJJ4dKvaUKGrRYon4e2XwRlrMZZUFIgx5Q5lVxjtVAzfAHMf8DNSC1KA5Tjo4YHghT6+IEouNqyERG4PI92DVFrLmIpQJ4j03klQWwx5FVRIrlVvu4jUuNJ/S5NSHGkIWkFqUVV4eTgapUJhnRg6MqrpFJRV2E1HG2tozSPLWsCrqbTfz3q9fgnmlsn6ymk8Zp1qQ1dRWjHsqjdIFbQxw7HKePKUsY0a9AYrrJE0nnw7X05BLhBoS+9odguTpENPbypM2DK4Ms076z8ymxALyUkCRzyMHcgIFKQk00QqNXYwE4i52OnBQaqDEFN0u1OpFJPiGcNqd3MAsO5lS+piSgdMSFTWNp3rtj268wQaZago0J6JkUh6TRtLjx2oNgC9nQp5fALP+XK6j4YVGtv7r448zu7R6VCo9PCxiuT185yiyT4B+Apy0oRyIepO44Cy1EsnJKsTEjMuKZBW7DhLJqCFVJEXNI73a5BWvQGN9gQ0jZYF1UuzGoQAQllWAv7/T5rcbaDHoGJBUqhIL0yUw1i7qrobu71L66PhJDYWoiSHlkfU5kahMZJsRdHVGgq0dBH/6kjwbnPhluSr48hWpslev2ACpHO9ICLUGphAdVz0YophwqgRR0rvxNpg3lKjkkV6YzAetzvGRTJsmpGCndSFoXdPh8T9sS5offovatMtWeF0wE4sVun52HYgmYhJVx9GMRJuQ7KvHW4pnesmWplBPS7eyL6yTijWNsksW6RmL5tMhjKDuxXGgthIWvY1m2lI376ajE6o29WMWEY8Dq0WdtzZnEgkiSTH4URL6wIEOJImWKllvX7Ow9snkjAuXkqmkK6caEdSAQ9iZ+jeLtTu0d/2oaLMj+13HAH9js+KHQ5QCR5j54G5k0qanSUPzsKIQAZJGoNRu25/slqQ6YS9poSs4oqiK+DCVuXX2t2vdf6d6vrpqTVF+U8L258HM0ceF8pK2Ml5Lw1gzs2RUnbqjHKOBx5OYAXBC4Q2MO/mqJOd7nz46wMz6p4rm3noi4Ptg3+2zt9w/sfBGlA+YuRwlBY5+x1Fj355aZv16rebB3esv+rbprwZr3xkqWvd04lTs6v6QVj5VLn6zbbru4LmcOuW3Z1nzpgHmtfOHLy2gVw7/xapOzKH1EoVykZx79Fzb7y9ac7Q6c87np2ybMcWdf/hl39hf5+9qHn+wOnHVywY7lrh+HBPW59LamGeWV+9OYrX7zzq3OEeunzYj1LdF9wvTgct7x5qPTH5heDFaeXOD6oih75as+S3k+TCss7q4eOrpw7uPPX+la0/zBoaqli89/JLe9r+qOw6ENq4/5PhJ3rWXtI+3vV910OoatOTeNpH586tfa+U1l8pe2fB9e5VrUPXY7WvV0T2DZw4Hi0/9tfZaQfneo+d3fedcLJh4OJAdi//Ad6QMMn0EQAA"
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
    const response = await axios.get(`https://api.ebay.com/buy/browse/v1/item_summary/search?q=${keyword}&limit=3`
    , {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        }
      })
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
      
