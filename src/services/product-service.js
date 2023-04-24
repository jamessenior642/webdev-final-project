import axios from "axios";
const API_KEY = "v^1.1#i^1#f^0#p^1#r^0#I^3#t^H4sIAAAAAAAAAOVYe2wURRzu9UUKFv6ogjyM7YpP2L3ZvUfvlt6Fo6VwCu31rq20SQN7u7Ptcne7y85cy6GYpioFBWOMEA1EmxgiDQhRo0XBBoFEDU0AURIjPuKrPJQI/YMELXFue5RrJbx6iU28fy4785vffN83v29mdkF7fsFj6xavu1RomZDd1Q7asy0WdhIoyM+bMzkne0ZeFkgLsHS1z27P7cg5XYaEWFTngxDpmopg8epYVEW82eih4obKawJSEK8KMYh4LPIh39IlPMcAXjc0rIlalCr2V3ioMCyVJQBsdtnplgArkFb1as5azUMJToddgtDh4lgxLEGR9CMUh34VYUHFHooDnI0Gdpqz1wLA2108CxgbBxqp4npoIEVTSQgDKK8JlzfHGmlYbwxVQAgamCShvH5fZaja569YWFVbZk3L5U3pEMICjqORT+WaBIvrhWgc3ngaZEbzobgoQoQoq3dohpFJed9VMHcA35SadTs4yJU6WMBKYSmcESUrNSMm4BvDSLYoEi2boTxUsYITNxOUiBFeCUWceqoiKfwVxcm/mrgQVWQFGh5q4QJfgy8QoLw+FWuqopXTbZDUSCsdCFbQsj0clt1OWaJdLtbpdAkwNc1QrpTGo+Yp11RJSSqGiqs0vAASzHC0MrY0ZUhQtVpt+GScxJMex11VkC1tTK7o0BLGcYuaXFQYIzIUm4831394NMaGEo5jOJxhdIcpEPGMrisSNbrTLMRU7axGHqoFY523Wtva2pg2G6MZzVYOANa6bOmSkNgCY8SJZmzS6yReufkAWjGpiJCMRAqPEzrBspoUKgGgNlNee6nDxpWmdB8Jyzu69V8NaZytI+2QKXu4iDEkl8w5WcElOCR3JvzhTZWoNYkDhoUEHROMCMR6VBAhLZI6i8egoUi8zSFzNpcMacnplmm7W5bpsENy0qwMIYAwHBbdrv+PTW610ENQNCDOVKVnpsphqFmSrMFWZ01VwBdH2hwlzikNfqku6Aj6408qgTWy4q5fhV1r/J5b9cJ1yZdHFaJMLZk/YwIkvZ4RERZrCENpTPRCoqbDgBZVxMT4WmCbIQUEAydCMBolDWMi6dN1f8Z26szQu61N4s5YZ/R8+i/OpuuyQsmCHV+skuMRSSDoCpM8fRhRi1k1gVw7rELS67qy3EQ9Jt4KubKOK9aE5BBbRRq6bDImZQa1iowBkRY3yDWbqU7evmq1CFTJaYYNLRqFRj07ZjfHYnEshKNwvNk6AwWuCOPsqGWdLo5zl3JuMCZeonmQLh9vW1IGN+Jc7+1dqK0j3+29WeaP7bAcBB2W3myLBZSBB9kHQEl+Tl1uzl0zkIIhowgyg5RmlbyyGpCJwIQuKEZ2UdYl0L9V/H1x9wuRK22rfpu3Niv900JXE7h3+ONCQQ47Ke1LA5h1rSePnTKtkLMBO2cHwO5iQSN44FpvLjs19+5jdH94oJf5tmTvwIpz1ITQyd7+g6BwOMhiycvK7bBklT2k57xWUDcvv2jf/XNr7luw+ZWeAx9wV4om/nWo89kzX52r2TT4afeFnye+c2rfvs196ycMnny+aO37XwzUP9LSMPP4PUcsh3cd+nrK9ssXdGagYfDHs5e3Hpg67ZkucffnjS8e/7hooGRb89NfXv7wpc5NHajb9ufBo5+cWNT09quzYxsS7x3q/X5H8Jsqd/f0eW9s2fj6zim2X+cfubgo0rnn0stSpOfhvsLgSUra0nOxxH5slhCZ2T35zeCZ2ahpsHX7qb+DfZEV01c+d/rA+j2nH59lbNjbUzff07dj2bY5c3c7d1186q39G49+90fnL/1b3GeXV4LPHn33lHH4/BMbmhJLdp4/sf6nj37Yv/dKZcHQWv4DP3EdnvQRAAA="
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
      
