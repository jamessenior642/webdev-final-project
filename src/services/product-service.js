import axios from "axios";
const API_KEY = "v^1.1#i^1#p^1#f^0#I^3#r^0#t^H4sIAAAAAAAAAOVYe2wURRi/6wsrgg2QYggh52J9ALc3+7jXyh0eLcgF2h69UqBocG53tgzd273uzPUBQWvDQwgJGB9o4A8ij4SE8AcClRg1QcQgRCWGmGAUIgkvawhWBRIR97alXCvh1Uts4v1zmZlvvvn9fvN9880OaC8qnrR61uqrI5zD8ra2g/Y8p5MbDoqLCiePzM8bV+gAWQbOre1PtRd05F+YSmBSS0k1iKQMnSBXa1LTiWR3hpi0qUsGJJhIOkwiIlFZikcq50g8C6SUaVBDNjTGFa0IMYJXEYGoeH2KEODUgGD16rd81hohBooy8IqcqPq9Qb8fWsOEpFFUJxTqNMTwgBfcQHTz/lrASRwv8UGWE8V6xlWHTIIN3TJhARO20Ur2XDML6t2RQkKQSS0nTDgamRmvjkQrZlTVTvVk+Qr3yhCnkKZJ/1a5oSBXHdTS6O7LENtaiqdlGRHCeMI9K/R3KkVugXkI+LbSgaBXEJCY8HHQy0NBzomUMw0zCendcWR6sOJWbVMJ6RTTtnspaqmRWIpk2tuqslxEK1yZv7lpqGEVIzPEzJgeWRiJxZhwRKeGjo1ydwtKKKjZHaupcKtiIqEGfariDgQ4ny8AUe8yPb56RR6wTrmhKzgjGXFVGXQ6sjCjgcqALGUso2q92oyoNIMn207oUxDUZ7a0Zw/TdIme2VWUtGRw2c176983m1ITJ9IU9XkYOGALZOVMKoUVZuCgHYm9wdNKQswSSlOSx9PS0sK2CKxhNnh4ADjPgso5cXkJSlqpZttmct2yx/ee4MY2FRlZMwmWaFvKwtJqRaoFQG9gwqLfK/D+Xt37wwoP7P1XRxZnT/98yFV+yAFfIAg5GBSFgJgAIBf5Ee4NUU8GB0rANncSmo2IpjQoI7dsxVk6iUysSIJX5YWAityKL6i6xaCquhNexefmVIQAQomEHAz8f9LkfgM9jmQT0VxFem6iHMUbFMVT0+ybWxWLpIkxGad5vDCqzKvx1kTT83FsmYqDdU00sCwaut9cuCP5cg1bytRa6+dMgEyu50SEWQahSBkUvbhspFDM0LDcNrQ2WDCVGDRpWxxpmtUxKJKRVCqas5M6N/Qe6JB4ONY5rU//RW26IyuSCdihxSozn1gOYAqzmerDykbSY0Dr2uGBmVxP4cU26kHxxtaddUixtkj2sMVKz2WTtSmzpFlmTUSMtGnds9nqzO2r1mhEulXNqGloGjLruEFnczKZpjChoaGW1jkIcAyHWKnlfAHe6/UHxeCgeMl2IV081I6kHB7EBeEHu1B7+n/bhx32j+twHgIdzk/znE4wFZRxE8GTRfnzCvIfG0cwRSyGKktwg259s5qIbURtKYjNvNGOq+D8Zrlr1q51jX+3NJ17foUj+2lh68vgib7HheJ8bnjWSwMYf3ukkHt87AheACLvBxzH88F6MPH2aAFXWjBmf/NXj36/g3323FtdP8x+sfRDbeXGGjCiz8jpLHQUdDgd0worz1wceaIk/suFfEdb9/WSjgOXFtQ/t2LtzM9Ljq+Z8tl+Jj7sj5Vy6aofy668cfNN8wg3etszs/dcn/CzD1Zverfo+LSfbtzs3Kcc26nEzh7Eh9Z3d8y/vHnttbIT3zh+H1O2Ln/NeO/OqqNfv3fGt1063fRnJdO674hxOB56++NgyZEvRy3bpp0703Bo2Psvjf+2tFahV8Dy09tu/sbs6t7LLdp9Q6GPXDy7ZX1VRGqasX1RZ+dfp8a9Hj+dmHBt+f6LkU/GNkQqRy3YffCjA4gcfvX6qpOnbpx/+p3Gis6de30fdG85P+W7k0cP6l3HRr1yFe6Y9Otrmy5tuFDM7rl8+YX64paljRv8XV/07OU/9N4yePQRAAA="
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
      
