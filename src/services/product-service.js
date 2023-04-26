import axios from "axios";
const API_KEY = "v^1.1#i^1#r^0#f^0#p^1#I^3#t^H4sIAAAAAAAAAOVYe2wURRjv9a40DVSIJQgFzbEIaHHvZvfu9vZW7uBowR6P3tFrC5QY3MdsGXq3e+zM0hbR1GoIIUTiI4ohIBr+KClGxaDEBySaGAjGiLEhUSAitoJi1AQDATHuPSjXSnj1Ept4/1xm5ptvfr/ffN/MtwM6R5VVbazdeLHcVlq8qxN0FttszGhQNqpk1j324sqSIpBnYNvV+WCno8t+djYWk4mUUA9xStcwdLYnExoWMp1ByjQ0QRcxwoImJiEWiCzEw0sWC6wLCClDJ7qsJyhnpCZIefyQ51SVD/CMAnxswOrVrvls0INUQOEkDvgZEXCyn+OtYYxNGNEwETUSpFjAemjgpVmugeEEwAoev4vxeJopZxM0MNI1y8QFqFAGrZCZa+RBvTlSEWNoEMsJFYqEF8Sj4UjN/LqG2e48X6GcDHEiEhMPblXrCnQ2iQkT3nwZnLEW4qYsQ4wpdyi7wmCnQvgamLuAn1FalnlJhR6R8yiKwgSkgki5QDeSIrk5jnQPUmg1YypAjSDScStFLTWkNVAmuVad5SJS40z/LTXFBFIRNILU/HnhFeFYjAqFNaJrSK+m26CkwHV0rL6GVr2SpAY4VaF5nuE4XoS5ZbK+ciIPWada1xSUlgw763QyD1qY4WBlfIIvTxnLKKpFjbBK0njy7fgBBUFzekuze2iS1Vp6V2HSksGZad5a/4HZhBhIMgkc8DB0ICNQkBJTKaRQQwczkZgLnnYcpFYTkhLc7ra2Nlebx6UbLW4WAMa9fMniuLwaJkUqa5vOdcse3XoCjTJUZGjNxEggHSkLS7sVqRYArYUKef0+D+vP6T4YVmho77868ji7B+dDofKDDzCqBFg/wwKfqqreQuRHKBei7jQOKIkddFI0WiFJJUQZ0rIVZ2YSGkgRPD6V9fAqpBUuoNLegKrSkk/haEaFEEAoSXKA//+kye0GehzKBiSFivTCRDmMtyiKu34dt7QuFjaxPguZLFoRURrrffURcxmKrVdRoGkt4ddHgrebCzckX51AljIN1voFEyCd6wURoVbHBCrDoheX9RSM6Qkkd4ysDfYYSkw0SEccJhJWx7BIhlOpSMFO6sLQu6ND4u5YF/R++i/uphuywumAHVms0vOx5UBMIVf69nHJetKti1bZ4RbTuZ5CqzKoh8UbWTXriGJtkcyyRUq22HRlKLvwOtllQKybhlVnu6Lp6qtBb4WadZsRQ08koNHEDDubk0mTiFICjrS0LkCAI3GEXbUMx7M+1hvwDY+XnLlIV420I6mAB7EjdGcFtXvwt32oKPNjumyfgi7bwWKbDcwG05lpYOooe6PDPqYSIwJdSFRdGLVo1jerAV2tsCMlIqO4ougi+Gm7fL52z+bWv9vW9j/6VFH+08Kux8HEgceFMjszOu+lAUy5PlLCjL2vnPUAL8sxnFU/+pvBtOujDmaCY/y4TYkTZ/e3vtX+VTR+qrR0Atu3gQflA0Y2W0mRo8tWFPy4YlHE4Tx+v21u34IfDrS/d/WJv6ZHK7aXhr+9eEY9TjdGv5s85dKFcy9R/aeXX9G1Y++DmcX7Aysv/XHwoa2X2Dh57ItIedWe5m/mjt/x+cPb3tl39Ud54qInN/Uu3HGy5VzvFn7S5oVNu6/OPMS/O+ONbftP2+sfqegrm/bqqVlC7y8nj/6+Z6r4iYn7Z0w68tvOiVWvH6j9s//pyt2ew5efsZ17/tfGI5Wy49mv5+zb2Xe4+9TlF8eFT485s2zum8e7H/hw1ZxAz9a9H7TbT8x/efK99GcvbN7SXbF4Z9nYnuDhI0fdX6481LzJWLNv7/kecUPVsW569NKfuSvPbUD6wZ7w9xd6P9r29itq+WvZvfwHXIGzVvQRAAA="
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
      
