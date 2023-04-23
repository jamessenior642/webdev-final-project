import axios from "axios";
const API_KEY = "v^1.1#i^1#r^0#I^3#f^0#p^1#t^H4sIAAAAAAAAAOVYbWwURRi+6xc0UIt8KUSSYxEl4u7Nftz1bts7PFpKL9DecXe0UNLgfsy2Q+92j93ZXluCOatBMUCiQoJKoNiYCNH+wChoIkaEXyiJJqgxQU0wylfQGCMR0bh7LeVaCV+9xCbej9vMO++88zzPvO/M7IJsWfljWxq2XKlwTirqz4JskdNJTwHlZaWL7ysumlvqAHkOzv7sw9mSvuJzNYaQSqb5GDTSmmpAV3cqqRp8zhggTF3lNcFABq8KKWjwWOLjocaVPEMBPq1rWJO0JOEK1wUITmRoPyNJok/xVnlFwbKq12MmtAAher3ADzhGqAKK9e+x+g3DhGHVwIKKAwQDGJYEHMmwCYbhWcBzgAIc10q4mqFuIE21XChABHNw+dxYPQ/rraEKhgF1bAUhguFQfTwSCtcta0rUuPNiBYd1iGMBm8boVq0mQ1ezkDThracxct583JQkaBiEOzg0w+igfOg6mHuAn5MaerxQUoQqmhZoloNMQaSs1/SUgG+Nw7YgmVRyrjxUMcI9t1PUUkPcACU83GqyQoTrXPZjlSkkkYKgHiCWLQ2tDUWjRDCkYk1FWi2ZgaIMu8horI5UOFFU/F5FJn0+2uv1CXB4mqFYwyKPmadWU2VkS2a4mjS8FFqY4VhlmDxlLKeIGtFDCrbxjPhxCQBsBVk/5WfpVntJh9bQxB2qvaowZcngyjVvr//IaIx1JJoYjkQY25ETKEAI6TSSibGduUwcTp5uI0B0YJzm3e5MJkNlWErT290MALR7TePKuNQBU1Yp2r52rdv+6PYDSJSjIkFrpIF43JO2sHRbmWoBUNuJIFflYZmqYd1HwwqOtf7LkMfZPboeClUfXplmOFZiPTTkZI+HLkR9BIdT1G3jgKLQQ6YEvRPidFKQIClZeWamoI5knvUoDOtTICl7/QrJ+RWFFD2yl6QVCAGEoij5ff+fMrnTRI9DSYe4QJleoCyH8XZZdse6vKuaoiHT0BYjk0Frw/LqmCcWNltQtFdB/uaN2NcbDtxpLdyUfG0SWcokrPkLJYBd64URoUEzMJTHRS8uaWkY1ZJI6plYC8zqclTQcU8cJpOWYVwkQ+l0uFA7dYHo3dUmcW+sC3k+/Sdn001ZGXbCTixW9njDCiCkEWWfPpSkpdyaYF073HatW+b1OdTj4o2sO+uEYm2RHGKL5KHLJpWjTBldEqVDQzN1655NRezbV0LrhKp1mmFdSyah3kyPu5pTKRMLYhJOtLIuQIIjYYIdtbTXxzA+P2D94+Il5Q7S9RNtSyrcRlyy5C4v1O7RL/dBR+5H9zmPgT7n0SKnE9SAhfQCML+seHVJ8dS5BsKQQoJCGahdtd5ZdUh1wp60gPSiGY4r4KfXpEsNB17o/Duz8cfqzY78bwv9beDBka8L5cX0lLxPDeChGz2ldOUDFQwLOIZl7AdoBQtu9JbQs0tmvvT6G2E/N51aeIpKLl974c2BhsP7QMWIk9NZ6ijpczrmHSvbFdvqaXnvyZ1tZ1/5PRVT9p9cceaHU3srPr746cHWE+cePf+LXDSr7+zB6N7fvujgmEF/Ynl7/eXYHtfVdc63l1y6iB4ffOvFzxe3TK+ZP2dz+eHdFXO4aysn7eiuaNy94onZz3d/J1cf/DXzsjB14MCfmRJz8/0tF3Z+cPzr1W2X1h1atO+dQf3b9sp3N7RPqzoSKI3Wl19tU5xu355d3xwlr857uutMZP32yQcOZTYN4OPlk5u+P/JXt+Op3jWfXGuYfPx0+UDbwsrpn/kiHxHbd/18esb+Py6f/PCIa9arXb2DpdueeyYbDy3aWi33z3lksLryxKbImnR0m5zd8ZV5oun9s89+eX7azMahtfwHYKy72/URAAA=";
const PRODUCT_URL = "https://fakestoreapi.com/products/"
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
      console.log(response)
      return response.data;
    };


export const getProducts = async () => {
    const response = await api.get(`${SEARCH_URL}`);
    return response;
    };

export const getProductById = async (productID) => {
        const response = await api.get(`${PRODUCT_URL}/${productID}`);
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
      