import axios from "axios";
const API_KEY = "v^1.1#i^1#r^0#f^0#I^3#p^1#t^H4sIAAAAAAAAAOVYe2wURRjv9YWlVIgSMI0mx2LVgLc3u/deucOjBXuktEfvWmlVcB+z7dC73WNnlvZAQ1OxSokYiSIGqhgRIRHjgyhqUAIaQI0oUcEYoxAFiTUWo6kY07i7PUpbCa9eYhPvn8t88803v99vvm9mdkB7YdGMzsrOvhLbuNwt7aA912ZjikFRYcHMa/NySwtywBAH25b2m9vzO/J+moX5ZCLF1UKcUhUM7W3JhII5yxikdE3hVB4jzCl8EmKOiFwsvKCKY2nApTSVqKKaoOyRiiDlZwXolRjghz6XW5IEw6qcixlXg5QkBIBX5AM8L7NA9nmNfox1GFEw4RUSpFjAuhzA7WA9cZblXG6OYekAAI2UvR5qGKmK4UIDKmTB5ayx2hCsF4fKYww1YgShQpHwvFhNOFIxtzo+yzkkViijQ4zwRMfDW+WqBO31fEKHF58GW95cTBdFiDHlDA3MMDwoFz4H5irgW1ILQIaSy+OToSiAgMuVFSnnqVqSJxfHYVqQ5JAtVw4qBJH0pRQ11BCWQpFkWtVGiEiF3fxbqPMJJCOoBam5c8IN4WiUCoUVoipILXe0QkGCyx3R2gqH7BYEOeCVJYffz3i9fh5mphmIlRF5xDzlqiIhUzJsr1bJHGhghiOVYYcoYzjVKDVaWCYmnkE/bxyAjIL+gK/RXNKBNdRJs2KuKkwaMtit5qX1HxxNiIYEncDBCCM7LIGCFJ9KIYka2WllYiZ52nCQaiYkxTmdra2tdKuLVrUmJwsA41y0oComNsMkT1m+Zq2b/ujSAxzIoiJCYyRGHEmnDCxtRqYaAJQmKuT2eVysL6P7cFihkdZ/GYZwdg6vh6zVB8PwPpHnpUBAcvtlIRv1EcqkqNPEAQU+7UjyWgskqQQvQodo5JmehBqSOJdHZl1+GTokb0B2uAOy7BA8ktfByBACCAVBDPj/P2VyuYkeg6IGSZYyPUtZDmNNkuSsXe5dWB0N61idiXQWNUSkulpPbUS/G0VXyChQv4z4V0SCl1sLFyRfnkCGMnFj/mwJYNZ6dkSoVDGB0qjoxUQ1BaNqAonpsbXALk2K8hpJx2AiYRhGRTKcSkWytVNnid4VbRJXxzqb59N/cjZdkBU2E3ZssTLHYyMAn0K0efrQopp0qrxx7XCatW6Yl1ioR8UbGXfWMcXaIDnAFkkDl03aokzj5SKtQazqmnHPpmvM21dcbYGKcZoRTU0koFbPjLqak0md8EICjrWyzkKCI36MHbWM18+6vSzwsKPiJVoH6ZKxtiVlbyPOn32FF2rn8I/7UI71Yzps+0CH7b1cmw3MAmXMdDCtMK8uP29CKUYE0oiXaYyaFOObVYN0C0yneKTlXp/TB05tEnsqd3S19LcuO3nHgzlD3xa23AduGHxdKMpjioc8NYAbz/cUMBOnlrAu4GY9LOtyM2wjmH6+N5+Zkj95Uu8bxz9a6es7tmnKw0/ET7fP/+HsZlAy6GSzFeTkd9hyqAd6OtN7pxzc4O3duqt/bcnT8+9a33OYio6fO63/ZNnab//qystjZ69dX7y5avKzz3w48avte754aXX89MTxExb3nsoP7Th7oHP/4qNkR3Pho91HlOLflNXd8Z3Pr/tAWt3Q9vWizWVHd65a3PPy/cX7n+x79/HGW9/a0L37tobfm6uK0sf7f+1C9gOfvB19ip1Udvimz/u61/28bJPcUtqxp2PJ8ddyt+9buWvFmpu7ivun/nmwc+PSe45+XFb5aR157LNj996OV73TsOiWVa8cez3df+bgQ4/8mCN8Sa35pfaEd5xwRC297pvJ32/tpQvff7Nthn6m6kTrtqXbXz1U98LK73zc7hf/vqZ547ZDz+39486BtfwH3taM7/URAAA=";
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
      
