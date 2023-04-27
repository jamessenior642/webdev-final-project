import axios from "axios";
const API_KEY = "v^1.1#i^1#p^1#f^0#r^0#I^3#t^H4sIAAAAAAAAAOVYfWwTZRhvt25mYCGgThwa6oEmQu56d22v15NWysZcgW1lHeMjINzHe+Nl7d1x995KUchcIkYif0gQDPzhJEQlxhhYAA2JGAKSIAY0ZmGCRIOCZgIm+4MEg3p3K6ObhK81cYn9p7nnfd7n/f1+7/O8X2RHecX0jXUbr3ndD5V0dZAdJW43NZasKC+bMa60pKrMRRY4uLs6pnV4Okt/nWnwmbTGNQFDUxUD+NZm0orBOcYoZuoKp/IGNDiFzwCDQyKXitfP52iC5DRdRaqopjFfoiaKRSRREoMkGwgLFCDDQcuq3IzZrEYxRhYogZdIWuIDERYAq90wTJBQDMQrKIrRJB3AySBOh5sphgtFOJIiwkx4KeZrAboBVcVyIUgs5sDlnL56AdY7Q+UNA+jICoLFEvHaVGM8UTOnoXmmvyBWLK9DCvHINIZ+VasS8LXwaRPceRjD8eZSpigCw8D8sYERhgbl4jfBPAB8R2qWDwVImmXFEEMFKZ4sipS1qp7h0Z1x2BYo4bLjygEFQZS7m6KWGsJqIKL8V4MVIlHjs/8WmHwayhDoUWzO7PiSeDKJxeIKUhWoVuNZIEigHU821eByUBDkCCNLOMtSDMPyID/MQKy8yMPGqVYVCdqSGb4GFc0GFmYwXJlggTKWU6PSqMdlZOMp9GMHFaSX2lM6MIcmWqXYswoylgw+5/Pu+g/2RkiHgonAYIThDY5AUYzXNChhwxudTMwnz1ojiq1CSOP8/mw2S2QDhKq3+mmSpPyL6+enxFUgw2OOr13rtj+8ewccOlREq0gtfw7lNAvLWitTLQBKKxYLhkMBOpzXfSis2HDrvwwFnP1D66FY9cGwAUHg6QATidAgLAjFqI9YPkX9Ng4g8Dk8w+ttAGlpXgS4aOWZmQE6lLhASKYDrAxwiYnIeDAiy7gQkhickgEgARAEMcL+f8rkXhM9BUQdoCJlepGyHKRaJcnf1M4saEjGTUOdAU0aLklIC5tCTQlzEUyuk2GkZQ1i1yWi91oLtyVfnYaWMs3W+MUSwK714ohQpxoISCOilxJVDSTVNBRzo2uCA7qU5HWUS4F02jKMiGRc0xLFWqmLRO++FokHY13M/ek/2Ztuy8qwE3Z0sbL7G1YAXoOEvfsQoprxq7x17PDbtW6ZVzioR8QbWmfWUcXaIjnAFkoDh03CoUwY7SKhA0M1deucTTTap69mtQ0o1m6GdDWdBnoLNeJqzmRMxAtpMNrKuggJDvlRttVSDEtbd5lwcGTTJjob6YrRtiQVbyH2vHCfB2r/0Mt9zOX8qE73EbLT/XmJ203OJJ+hppJPl5cu9JQ+XGVABAjIy4QBWxXrzqoDog3kNB7qJY+4rpGXdoq/1+3Z1PZXds3F59e7Ct8WupaTkwZfFypKqbEFTw3kk7dayqjxj3vpABmkwxQTipDUUnLqrVYPVel5tO3i8dAn297aD+TfpmwOnMRdqZ7ZpHfQye0uc3k63a66Ly8kjfLct68c3PixcHllz6m27EfLvJPkl65OOT25ajV1dWUSdH3z4VRUf3XFovPu3XM/OCS9un7HmaNXnvXv7U5/13fkRE+qd8qL/a/v8t5YfOjiAa8HHptW8xlzomLBvH210pgb77e37lre/mf1rLK9W147xW57s+edS2vmLnEdTny1+THuTHdfX+VTWxtyE3uO7Xnvl3Nb4JFpG5LystUTeivP7d7du732wHVkdqO+Df3vLuz+eYdyuv/vo73ztk8Yc7bp7fGHfzz58vkqFN4V/XQ6P733eH9lQ9/3b2grz8SJC1vrPcef03/KBaomXiB6Gr3jZm3ah37YefqJU2evz5v8xxcHL+//+sqxgbn8B1yQBIn1EQAA"
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
      
