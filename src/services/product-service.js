import axios from "axios";
const API_KEY = "v^1.1#i^1#f^0#r^0#p^1#I^3#t^H4sIAAAAAAAAAOVYbWwURRi+a681TcFqAEU+wrFFCeDuze59r9yZo6XpEWhLrxRoVLIfs2Xp3e51Z7bH1UCaQ5AgwT9+EJRYEYkQTQTUHyJEiCHRBBWMxkgI1QQ1BBWCijYKzm6Pcq2Er15iEy+5bOadd955nmfed2Z2QU95xewN9RsujXXeVdLbA3pKnE62ElSUl825u7RkUpkDFDg4e3tm9LhypT/ORUIqmeabIUrrGoLu1amkhnjbGKFMQ+N1AamI14QURDyW+ERs0UKeYwCfNnSsS3qScsdrIxTn9/pkIAJFEYIieRCrdjVmix6hAmGW9Qf9sgQgCIe9IdKPkAnjGsKChsl4wHlp4KO5YAsHeC7Isz4GhMJtlLsVGkjVNeLCACpqw+XtsUYB1htDFRCCBiZBqGg8VpdojMVr5ze0zPUUxIrmdUhgAZtoaKtGl6G7VUia8MbTINubT5iSBBGiPNGBGYYG5WNXwdwBfFvqoM8bCnitvyAIfhgsipR1upES8I1xWBZVphXblYcaVnH2ZooSNcRVUML5VgMJEa91W4/FppBUFRUaEWr+vNjyWFMTFY1pWNdUvYbOQFGGXXRTcy2t+ERRCQcUmQ6F2EAgJMD8NAOx8iIPm6dG12TVkgy5G3Q8DxLMcLgybIEyxKlRazRiCrbwFPpxgwr626wlHVhDE6/UrFWFKSKD227eXP/B0RgbqmhiOBhheIctUIQS0mlVpoZ32pmYT57VKEKtxDjNezyZTIbJeBndaPdwALCeZYsWJqSVMCVQtq9V65a/evMBtGpTkSAZiVQeZ9MEy2qSqQSA1k5FfUG/lwvmdR8KKzrc+i9DAWfP0HooVn2EAxzJEwgF4AsrQeArRn1E8ynqsXBAUcjSKcHogDidFCRISyTPzBQ0VJn3+hXOG1IgLQfCCk0AKLTolwM0q0AIIBRFKRz6/5TJrSZ6AkoGxEXK9CJlOUy0y7KnuSuwuKEpZiJ9jmpy6vK4vKTZ3xw3l6pN3Yoabu3Eoe545FZr4brka5IqUaaFzF8sAaxaL44I9TrCUB4RvYSkp2GTnlSl7OhaYK8hNwkGziZgMkkMIyIZS6fjxdqpi0TvtjaJO2NdzPPpPzmbrssKWQk7ulhZ4xEJIKRVxjp9GElPeXSBXDs8Vq0T8wob9Yh4q+TOOqpYE5IDbFV54LLJ2JQZ1CUxBkS6aZB7NtNo3b5a9A6okdMMG3oyCY1WdsTVnEqZWBCTcLSVdRESXBVG2VHLBkJcgAtyXt+IeEn2QbpitG1JxduIXY/e5oXaM/TlPuqwf2zOeQTknIdKnE4wFzzIVoPp5aVLXKVjJiEVQ0YVFAap7Rp5ZzUg0wGzaUE1SsY5LoEfXpLO1e/e1HE50/n9I2schd8Weh8HEwe/LlSUspUFnxrAlGs9ZWzV/WM5L/CR5QZckPW1geprvS72Ptf4ur93fBnvfqZr3NT3zn3+88lavNHfA8YOOjmdZQ5XzumYvGW747veC2dybZXOqkPLZp/+5JejbTX98FA56Fse2j+x/+CRLZ1nnnj2g8pT447/ztDnfLhX6HN1TI+b4rI/ell6Zu7VWRO2Plf9zc4FfVNe2fzFmD37Hsi8E4azLn8UvrzLLx8In73nzU+lp/m+1kUHr5wO5T7rPjB++58n1vDlIhd+7OJvJ/vrv/qrX7yy6eXFkbcc3NYp64NPRR56UvlVyPr3V8Hzm05e2P7CiwvWrUe51z7eeFTfO3VzS32m4sSOe3cfeHd/VdvO1hnPB16fllqy61Tn+8cmHate8cZPZ7et3TZzrTS/ZFr5vsMX396xuW7p4XUbvxb3Pnw8caK9as+qpbEJ5ydnP2z7dmAt/wE2IQaE9REAAA=="
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
    const url = 'https://api.ebay.com/buy/browse/v1/item_summary/search';
    const headers = {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
    };
    const params = {
        'sort': 'creationTimeNewest',
        'limit': '6',
        'category_ids': '9355'
    }
    const response = await api.get(url, { headers, params });
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
      
