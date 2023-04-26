import axios from "axios";
const API_KEY = "v^1.1#i^1#I^3#r^0#p^1#f^0#t^H4sIAAAAAAAAAOVYW2wUVRje7Y2sUKhpI6UBs4wWE8nMnJm9zQ7s6tIW2YRet1SoGpzLmXbo7swwc6bbRQhNTTAIAbzFC8SUEBWN8iAEXrAmxkA0UeMLD2AjPlggmKgPlUsEPDMtZVsJt25iE/dlc/7zn/9833f+/5wzB/SX+Z7ctmrbpXLvrKLBftBf5PUys4GvrHTp3OKimlIPyHPwDvY/3l8yUHx+uSVk0gbfBi1D1yzo78ukNYt3jTHCNjVeFyzV4jUhAy0eSXwq0biaZynAG6aOdElPE/5kfYzgRDkEYCQqM6woRCHEVu1mzHY9Rggy4CKKIgVDQTYYAEHcb1k2TGoWEjQUI1jABkgQJNlwO8PxIMAzQYqJsp2EvwOalqpr2IUCRNyFy7tjzTysd4YqWBY0EQ5CxJOJlanmRLK+oal9OZ0XKz6uQwoJyLYmt+p0Gfo7hLQN7zyN5XrzKVuSoGURdHxshslB+cRNMA8A35U6LAuKAAEjMQwnclGlIFKu1M2MgO6Mw7GoMqm4rjzUkIpyd1MUqyFugBIabzXhEMl6v/PXagtpVVGhGSMaViTWJVpaiHhCQ7qm6nVkFooy7CVb2upJJSiKSjSsyCTHMeEwJ8DxacZijYs8ZZ46XZNVRzLL36SjFRBjhpOVifChPGWwU7PWbCYU5ODJ82PBTQW5cKezpGNraKNuzVlVmMEy+N3m3fWfGI2QqYo2ghMRpna4AuGiMQxVJqZ2upk4njx9VozoRsjgaTqbzVLZAKWbXTQLAEOvbVydkrphRiBcX6fWHX/17gNI1aUi4SLG/jzKGRhLH85UDEDrIuLBSCjARsZ1nwwrPtX6L0MeZ3pyPRSqPnCuREVGEKUoF4hwAbYQ9REfT1HawQFFIUdmBLMHIiMtSJCUcJ7ZGWiqMh8IKWyAUyAph6MKGYwqCimG5DDJKBACCEUH1f+nTO410VNQMiEqUKYXKMthqkuW6bbecGtTS8K29KWqzarrkvKatlBb0n5WbdmkqNGOjYjblIzday3clnxdWsXKtOP5CyWAU+uFEWGVbiEoT4teStIN2KKnVSk3sxY4YMotgolyKZhOY8O0SCYMI1monbpA9O5rk3gw1oU8n/6Ts+m2rCwnYWcWK2e8hQMIhko5pw8l6RlaF/C1g3ZqHZvXu6inxVvFd9YZxRqTHGOrymOXTcqlTFm9EmVCS7dNfM+mmp3bV7veAzV8miFTT6eh2cFMu5ozGRsJYhrOtLIuQIKrwgw7apkwx2JWTDQ4LV6Se5Cun2lbUuE24pKn7vNCTU/+uI973B8z4P0KDHiHirxesBzUMo+BxWXFa0qK59RYKoKUKiiUpXZp+JvVhFQPzBmCahZVei6Bc3ul31Z9/GrP9ezGkWVbPPlvC4MvgOqJ1wVfMTM776kBLLzVU8rMm1/OBkCQDTMcCDDBTvDYrd4S5pGSquLRbM1oCXOlYvinC0d8755tSF5cCMonnLzeUk/JgNczb8/XRfsHfSc8H42cWXawDbDg89Ss42X7No8+seDq79/UfLd2n/JixRdkdWDNCePN3ks7b1S0Dp2vOngoeHDnQ1ctqnJPeNGcxaPdSxYN7xip3n7kMHfm7cHan+ntlb7sa48a7ZUnOjwvDew+d2336/P/+nL/rx+q5tYNJ68d3kd3ne7zHbpxYOjHQW/Vp5lu5rkq9MrwH2/tPDDSeFgaFi82Rdp/OXBqx7zPqpOXMw1Hj9W+UXv0mOeHzeLJ95rqhnKNLxPXdp965rj3Runw1gt/R/ecJt/PPGxTV0obt3wQ2usLUp53OtGSQfGTZdqCXbGzrfOV6/T18ufXfU9U/Pl0VN469/KGXd9GxtbyHyQrteD1EQAA";
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
      
