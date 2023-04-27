import axios from "axios";
const API_KEY = "v^1.1#i^1#f^0#r^0#I^3#p^1#t^H4sIAAAAAAAAAOVYbWgURxi+j0QNMZY21miwcm5qscru7e59b3MXziQ2J5o7czFqVOx+zCZr9nYvu7O5nKJcAwZphVptq6VCRdqiYPtD2/4QLSpaKcWPUkTEglhKFbX0g4qaSuns5oyXVPzKQQO9P8e88847z/PM+87MDpkbVzanv6n/VoV9vGNXjsw57HaqnCwbVzp3ktNRXWojCxzsu3Iv5kr6nFdrdTYlp5kWoKdVRQeu3pSs6IxlDGOGpjAqq0s6o7ApoDOQZ5LRRQsZmiCZtKZClVdlzBVrCGMUFaRogQoJHBmgA1wQWZV7MVvVMBYMer1+2o88WE70cAD167oBYooOWQWGMZqkPTjpxelAK+lhKC9DU0QgRLVjrjag6ZKqIBeCxCIWXMYaqxVgfThUVteBBlEQLBKLzk/Go7GGxubWWndBrEhehyRkoaEPb9WrAnC1sbIBHj6NbnkzSYPnga5j7sjgDMODMtF7YJ4CviW1EEBaCgIv0KSfA0GhKFLOV7UUCx+Ow7RIAi5argxQoASzj1IUqcGtATzMt5pRiFiDy/xbbLCyJEpAC2ON86LLo4kEFokqUFUktR7PAE4APXiipQEXvRwnhvyigAeDlN8fZEF+msFYeZFHzFOvKoJkSqa7mlU4DyDMYKQyZIEyyCmuxLWoCE08hX6+ewoGA+3mkg6uoQE7FXNVQQrJ4LKaj9Z/aDSEmsQZEAxFGNlhCRTG2HRaErCRnVYm5pOnVw9jnRCmGbc7k8kQGQ+hah1umiQp97JFC5N8J0ixmOVr1rrpLz16AC5ZVHhUpMifgdk0wtKLMhUBUDqwiDfg89CBvO7DYUVGWv9lKODsHl4PxaoPQPEBAe02JB3yen1BsRj1EcmnqNvEATg2i6dYrQvAtMzyAOdRnhkpoEkC4/GJtCcoAlzwh0TcGxJFnPMJfpwSASAB4Dg+FPz/lMnjJnoS8BqARcr0ImU5SHYIgrulx7+4ORE1dHWuZNDS8piwpMXXEjOWSom1ohRq64bBtbHw49bCA8nXyxJSphXNXywBzFovjghNqg6BMCp6SV5Ng4QqS3x2bC2wRxMSrAazSSDLyDAqktF0OlasnbpI9J5ok3g61sU8n/6Ts+mBrHQzYccWK3O8jgKwaYkwTx+CV1NulUXXDrdZ68i82kI9Kt4SurOOKdaI5CBbSRi8bBIWZULv4QkN6KqhoXs2ETdvX61qF1DQaQY1VZaB1kaNuppTKQOynAzGWlkXIcEldowdtZQ/SPv8Pto/umXjrYN09Vjbkoq3EZfUPeGF2j384z5is35Un/0Y2Wf/ymG3k7XkLKqGnDnOuaTEObFalyAgJFYkdKlDQd+sGiC6QDbNSpqj0naLvPIBf6Np7xtdf2e6f35lva3wbWHXKnLq0OtCmZMqL3hqIKff7ymlnqmqoD2klw6QHspLU+1kzf3eEmpKyeRPpn+Ze/2jI2Xx56/eOD0+cOqs3beZrBhysttLbSV9dhtxqWPzhR8OfVN7+1p/7+3uo1v5Zy6u2dD42Y/v8JUTGrbvn/QWgDOO7I+X2Pq7vv7w5oKKGaGJ+7b+2ndiKXfqucO1Td9xKy85qsSDO8XjG886q0/ULbnW3vD+NG/Z7XOlM8/VnT6xR1j3/ey7J2c37ts0h7W9d95zbkf1lhU/7b3io/fMy03Z3fbnoT/eXXWnnGlbd5CSXj287HO83Lu9igq/UOn6xZDPey7HLvdnm9dsWVmzs7J7qn9azYVNu6/vfrmqZ/32T3+7OPnj43cuHI2fXHGz88DvwoI5W569OLD2bv22WdePvLm58Zitsm6A/ra+dN+EjQMDL7XqO7Yxr2Vm/+Ws/uLMhrcvnXEcGFzLfwCDEdWA9REAAA=="
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
      
