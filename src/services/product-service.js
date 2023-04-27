import axios from "axios";
const API_KEY = "v^1.1#i^1#r^0#I^3#p^1#f^0#t^H4sIAAAAAAAAAOVYa2wUVRTebbdFpNWABLQSsw4KapnZmdnX7MAuWVqaLo92213KQxRmZ+60l87ODHPvdHdrNE0DBDUVjIQ/hlA1BI1GUWOMBJAYUDSRIMQYo0UDgeIL0chDosTZ7VK2lfDqJjZx/2zm3HPP/b7vnnPvmaG7ysc+sq5+3flK+5iS3i66q8RuZ8bRY8vLqu8oLakqs9EFDvberge6HN2lp2YhIanofDNAuqYi4EwnFRXxOWOQMA2V1wQEEa8KSYB4LPKx8MIFPEvRvG5oWBM1hXBGaoOE3y2JXkESZAb4/H7AWFb1csy4FiSA6JEtcyDg88mJhDdgjSNkgoiKsKDiIMHSrJukPSTrjzMBnqZ5xkuxbGAZ4WwBBoKaarlQNBHKweVzc40CrNeGKiAEDGwFIUKRcF2sMRypndsQn+UqiBXK6xDDAjbR0KcaTQLOFkExwbWXQTlvPmaKIkCIcIUGVhgalA9fBnML8HNSu1mWowEn0hzjpaWiCFmnGUkBXxtF1gIlUs658kDFEGeup6elRWIVEHH+qcEKEal1Zv+aTEGBMgRGkJg7J7w0HI0SobCKNRVqNWQKJCTQQUaba0nZk0jIAZ8skRzH+HycAPLLDMTKSzxsnRpNlWBWMORs0PAcYGEGQ5XheG+BMpZTo9pohGWcxVPgxzKDCnqWZTd0YAdN3KZm9xQkLRmcucfr6z84G2MDJkwMBiMMH8gJFCQEXYcSMXwwl4f51EmjINGGsc67XKlUikq5Kc1odbE0zbiWLFwQE9tAUiDyvtlaTyN4/QkkzFERgTUTQR5ndAtL2spTC4DaSoQ8fq+b9ed1HworNNz6L0MBZ9fQaihWdcgsS8syx3AC7RcSHrEY9RHKp6griwMkhAyZFIx2gHVFEAEpWnlmJoEBJd7tlVk3JwNS8gVk0hOQZTLhlXwkIwNAA5BIiAHu/1MmN5roMSAaABct04uS5SDWKkmu5g5fU0M0bCKtGposXBqRFjV7myPmYhjtlGGgZTXmOiPBG62Fq5KvUaClTNxav3gCZGu9GCLUawgDaUT0YqKmg6imQDEzujbYbUhRwcCZGFAUyzAikmFdjxTvpC4KvZs6JG6NdXHvp//gbroqK5RN2NHFKjsfWQEEHVLZ24cStaRLE6y2wzJlax2uyKEeEW9odayjirVFcoAtlAaaTSpHmUIdImUApJmG1WVTjdnuK661A9W6zbChKQowWpgRV3MyaWIhoYDRVtZFSHAojLKrlvFxrM/q2hjviHiJuYt0xWg7kop5EDuCN9VQu4a+2odsuR/Tbf+I7rbvKbHb6Vn0g8xU+v7y0kWO0ooqBDGgoCBTCLaq1hurAah2kNEFaJTcZTtP978o/lz/2jPtl1KrT8580lb4ZaH3MfruwW8LY0uZcQUfGugpV0bKmDsnV7Ju2sP6mYAlo3cZPfXKqIOZ5Ji4qOK+8W/LDpwaP+lw/45T+/XQexvpykEnu73M5ui226bN+HzlQ78rRvpcZM8RR8/sX8z0hf4fppfsfGVLc9VzDvH2iz8eS4V7jpVvemFyaF7PGbBt4/OOp49/tyt9zLlv5sdvbXo9Fp4ucFpwzON/fjj/UM3+9Uv7Np/Y8P1txMFLWz5Y1XNi/drdBzrfiX12WP91Zabv2eq1O19uWnVhySfVu6bcc6AKb++XUAeIbwfzbcfvPbpjG/fNDOLsltlfntjw7d4Dveaacy+dnnCqZ+sXFeO+mr548SFn7afLbZsvJo0zqOWOfZPIzrq63X19DX98vfKptq1v7j04cUn8rGKbdvjko07lL9f59nlt9ZXLK06znU2vPnHkp7+nTa6NTjj9/tE3fqPMh8O9a97dMbCX/wD+4BKa8xEAAA=="
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
      
