import axios from "axios";
const API_KEY = "v^1.1#i^1#r^0#p^1#f^0#I^3#t^H4sIAAAAAAAAAOVYbWwURRjuXe9KmgIlinwUgseCRsHbnd27vdtbuTPHtaSXQHv0SoUmgPsx2w692z12ZlsOgylFGqU/gGCCEUJqYkJQYtAoMWogoCIhEtBokBA1/BAIQSUmivWHunst5VoJX73EJt6fy7zzzjvP88z7zswO6K6oXNBb33tjkmuCu78bdLtdLrYKVFZ4F04ud9d4y0CRg6u/e363p6f8yiIsZTM5sQninKFj6NuQzehYLBijlGXqoiFhhEVdykIsEkVMx5ctFTkaiDnTIIZiZChfsjZKhVSZh2xQ4jU2wPJAsq36zZjNRpSSuRDg+QhgeTWoRcIhux9jCyZ1TCSdRCkOcAE/CPq5cDMbEVleZAEdEUKtlK8FmhgZuu1CAypWgCsWxppFWO8MVcIYmsQOQsWS8SXpxniytq6heRFTFCs2pEOaSMTCI1sJQ4W+FiljwTtPgwveYtpSFIgxxcQGZxgZVIzfBPMA8AtSB1khFOHYsCzwAscCtSRSLjHMrETujMOxINWvFVxFqBNE8ndT1FZDXgcVMtRqsEMka33O33JLyiANQTNK1S2Or4qnUlQsrhNDR0bC3wVlFXb6U021fi0oy1okpKl+QWBDIUGCQ9MMxhoSedQ8CUNXkSMZ9jUYZDG0McPRyoAiZWynRr3RjGvEwVPkx7HDCoJWZ0kH19Ai7bqzqjBry+ArNO+u//BoQkwkWwQORxjdURAoSkm5HFKp0Z2FTBxKng04SrUTkhMZpquri+4K0IbZxnAAsMzKZUvTSjvM2qXo+Dq17vijuw/wowIVBdojMRJJPmdj2WBnqg1Ab6NiwTAf4MJDuo+EFRtt/ZehiDMzsh5KVR9SAHB8QFY0VgURTpVLUR+xoRRlHBxQlvL+rGR2QJLLSAr0K3aeWVloIlUM8BoXEDToV0MRzR+MaJpf5tWQn9UgBBDKshIR/j9lcq+JnoaKCUmJMr1EWQ7TbarKNHWGljek4hY2FiKLQ6uS6oomvilpPYtSGzUUaVlPhI3J6L3Wwm3JJzLIVqbZnr9UAji1XhoR6g1MoDomemnFyMGUkUFKfnwtcMBUU5JJ8mmYydiGMZGM53LJUu3UJaJ3X5vEg7Eu5fn0n5xNt2WFnYQdX6yc8dgOIOUQ7Zw+tGJkGUOyrx2MU+u2eW0B9Zh4I/vOOq5Y2yQH2SJ18LJJFyjTuFOhTYgNy7Tv2XSjc/tqNjqgbp9mxDQyGWi2sGOu5mzWIpKcgeOtrEuQ4EgaZ0ctGxK4EMdFWDAmXkrhIF073rak0m3Enmfu80LNjPy4j5UVfmyP6zjocR1xu1xgEXiMnQfmVpSv8JRPrMGIQBpJGo1Rm25/s5qQ7oD5nIRM98NlN8DlPcq1+gPbOv7qWn/p6U1lxW8L/avBjOHXhcpytqroqQHMvtXjZaunT+ICIMiF2QjLs6AVzLvV62GneaZepKfMP35+/5bZNW7m0fyrp8Cc6ktg0rCTy+Ut8/S4ymbuFn7j8xXt7h/2bpEOfLiaX/wrXNfiuTp/4OWt3+9OVJU/1Rt4O+yVfg9Xz+jr2Pzc0U/PCfv2eU6f6atPMMFZ2985xq954ue31O07G84O/HhgwSfnqolw5nrv8tiuywfXzdjTKr5y5UTjwJXDaMrJ1P6qU+e+mc583Xk0QAfpEwktkQ7UGdt2BOsvPLn18Nkdj//5vPdkmSUcmrny4gerpp/qO1b10Jxd096b+8LqawsSH6unxYGe1w821mx68wsF/RT1HWETyqHP/n5kwuYXZ625sKULCx/psTlw4rut/WrtL9+1fnn1/Zf6IpPLq27sbZHO462vVX579Ex2KnX+88Pkundn6I83vhpcy38Aj9KzIvURAAA=";
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
      
