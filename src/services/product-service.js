import axios from "axios";
const API_KEY = "v^1.1#i^1#p^1#I^3#r^0#f^0#t^H4sIAAAAAAAAAOVYXWwUVRTutttCLUiIBQwoWaYQFJzZ+dnfobu4tNQuge3SXYqABufnTnvt7Mx27p1ut4ppKlYgCBoLxqCmBh9q5AGJgogaNSFiGh5qJBqiJBIjPij6YngwJc5MS9lWwl83sYn7splzzz33+757zr1nhu6pqFzR19h3ZbZrRulAD91T6nIxVXRlRfnKe8tKF5aX0AUOroGepT3u3rJfa5GQUbN8M0BZXUPA05VRNcQ7xghhGhqvCwgiXhMyAPFY4lOxDet5lqL5rKFjXdJVwhOvjxBhORgOMLIQVkTFrwSDllW7FjOtRwiGEUFA4WhBAXSICcrWOEImiGsICxqOECzNciTtI1lfmgnzHMtzYSrIhbcSnhZgIKhrlgtFE1EHLu/MNQqw3hyqgBAwsBWEiMZjDammWLx+bSJd6y2IFR3TIYUFbKKJT3W6DDwtgmqCmy+DHG8+ZUoSQIjwRkdXmBiUj10DcxfwHalDftYnBARRBIoisiFfUaRs0I2MgG+Ow7ZAmVQcVx5oGOL8rRS11BCfBhIee0pYIeL1HvtvoymoUIHAiBBr18S2xJJJIhrTsK5BvY7MAVEGnWSyuZ5UfKKohAOKTIZCTCAQEsDYMqOxxkSetE6drsnQlgx5EjpeAyzMYLIybIEyllOT1mTEFGzjKfBjmXEF/VvtLR3dQxO3afaugowlg8d5vLX+47MxNqBoYjAeYfKAI1CEELJZKBOTB51MHEueLhQh2jDO8l5vLpejchylG61elqYZ7+Mb1qekNpARCMfXrnXbH956AgkdKhKwZiLI43zWwtJlZaoFQGslor6gn2ODY7pPhBWdbP2XoYCzd2I9FKs+rMLwsZyk0IGgJHM+qRj1ER1LUa+NA4hCnswIRjvAWVWQAClZeWZmgAFlnvMrLBdSACkHwgrpCysKKfrlAMkoANAAiKIUDv1/yuR2Ez0FJAPgImV6kbIcpFpl2dvcGdiYSMZMpK+EJgu3xOVNzf7muLkZJrsVGG7pwKHueOR2a+GG5OtUaCmTttYvlgB2rRdHhEYdYSBPiV5K0rMgqatQyk+vDeYMOSkYOJ8CqmoZpkQyls3Gi3VSF4neHR0Sd8e6mPfTf3I33ZAVshN2erGy5yMrgJCFlH37UJKe8eqC1XZ47Vq3zNsd1FPiDa2edVqxtkiOsoXyaLNJOZQp1ClRBkC6aVh9NtVkd19pvR1o1m2GDV1VgdHCTLmaMxkTC6IKpltZFyHBoTDNrlomEGK5gMUsPCVeknORbp9uR1LxDmL36jtsqL0TX+6jJc6P6XV9Sfe6Pit1uehaehlTQy+pKNvkLpu1EEEMKCgoFIKtmvXOagCqHeSzAjRK7yu5Ql86JP3W+O6e9qu5jl9W7Sgp/LYw8CR9//jXhcoypqrgUwP9wPWRcmbOgtksR/tYHxPmWKurpGuuj7qZ+e7qqtiJ8gXvrP72/IlLP5hXE9u+6R8so2ePO7lc5SXuXlfJEwd2x7v2vjbyF+d5tOHr1FMfVX/+4Vwm2v7Fgczfz+3PV7yxakeg71B+7mOLzr+1JaaGLmROzXik/0d8/HvjxUFl/6lVMwZ3HQz0U7s+XrNv6NPL8eHB6L4RpXLZtkP678vpqnT1Jc61br48XHv0cuziuc6Z91RLr/+5syu1+mQwuGFmd+XpC83v9y6KnzBLc92zTtcnUkOhc7t/clPPG01nHvxuaOfifccOHx94ePGzr3YOJ442nT2QVpanh97OPxNeUdOx9eVX9u88cmbeuWPaQ0xHQ6JxTu7kxpE/Xqg4eHFkSfl7Rzb3D5//6pM68+xLO9q62M43D3/w8551cF5ymOu7wKCapUsQP7qX/wCF2a/A9REAAA=="
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
      
