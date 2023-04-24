import axios from "axios";
const API_KEY = "v^1.1#i^1#f^0#p^1#r^0#I^3#t^H4sIAAAAAAAAAOVYbWwURRjutddKwSoCASRCzgWiBfduP+727tbemaMFOaXt0SuV1ijux2w7dG932Z2ltEJT2oSPJgRMiEQw0EQlVqIYJeoP0ggYEkVjEUUhBkJiFEo1QcOHRIm726NcK+Grl9jE+3OZd95553meed+Z2SHaCgrnrFu47nKR677crjaiLdflIscRhQX5cx/Iy52Wn0NkOLi62ma1udvzzpYYXErW2CpgaKpiAM+qlKwYrGOMYKausCpnQINVuBQwWCSwyVj5IpbyEqymq0gVVBnzxMsimEhRDB0IC2RAoiSSoyyrcj1mtRrBACNRDC8FqTDF+8NAsvoNwwRxxUCcgiIYRVA0Tvhxyl9NhliKYcmw1wpZh3lqgG5AVbFcvAQWdeCyzlg9A+utoXKGAXRkBcGi8diCZGUsXja/orrElxErmtYhiThkGkNbpaoIPDWcbIJbT2M43mzSFARgGJgvOjDD0KBs7DqYe4DvSB0mGYGnyZAACMYfDIezIuUCVU9x6NY4bAsUcclxZYGCIGq+naKWGvxyIKB0q8IKES/z2H+LTU6GEgR6BJs/L1YbSySwaExBqgLVUrwJ8CJYiSeqynDJz/NSmJFEPBQiGSbEgfQ0A7HSIg+bp1RVRGhLZngqVDQPWJjBcGXIDGUsp0qlUo9JyMaT4UcRgwrSdfaSDqyhiRoUe1VBypLB4zRvr//gaIR0yJsIDEYY3uEIFME4TYMiNrzTycR08qwyIlgDQhrr8zU1NXmbaK+q1/sogiB9S8sXJYUGkOIwx9euddsf3n4ADh0qArBGGpBFzZqFZZWVqRYApR6L+oMBmgqmdR8KKzrc+i9DBmff0HrIVn2AECkBOkhTAZoHQd6fjfqIplPUZ+MAPNeMpzi9ESBN5gSAC1aemSmgQ5Glrf2PDkkAF5mwhPvDkoTzAZHBLUiAAIDnhXDo/1Mmd5roSSDoAGUp07OU5SBZL4q+qpXM4opEzDTUudCkYG1cXFIVqIqbz8FEiwTDNStQqCUeudNauCn5UhlaylRb82dLALvWsyPCQtVAQBwRvaSgaiChylBoHl0LTOtigtNRcxLIsmUYEcmYpsWztVNnid5dbRL3xjqb59N/cjbdlJVhJ+zoYmWPN6wAnAa99unjFdSUT+Wsa4fPrnXLvMxBPSLe0LqzjirWFskBtlAcuGx6HcpeY6Xg1YGhmrp1z/ZW2revarURKNZphnRVloFeQ464mlMpE3G8DEZbWWchwSE3yo5akglRNEMEg+ER8RKcg3TZaNuSsrcRu5+6ywu1b+jHfTTH+ZHtroNEu6sn1+UiSojZ5Ezi0YK8Je68+6cZEAEv5CSvAesV65tVB95G0KxxUM+dmHOZ+GWH0L+wu7PxWtOKn59ck5P5ttD1AjF18HWhMI8cl/HUQDxyoyeffHBKEUUTfspPhiiGDNcRM2/0usnJ7kn008cnFoLel1/p2z/r4NhvNn5+AdtKFA06uVz5Oe52V44yBfSs2PLtVx+VF09onBxskK8Qnatfnf7E3l0bardO6V6679cv+8716ntO9qe+lqZ3rpu2a1NfyRcfbxhfcGLTa9I4ebvr9JrvPzv0Q9+F7RV/betK5pHc7FMHXEe/O/Xmi93uY8W7XPnSzrLN58Y8FPz96PmW/W+4N/V2b9mde7Ee/jh3e5d2/Oraqx09h7uvnLj0zr5jv2070/BB6bzzdWdX90szLk1db77UEe84E5g0cXn/+PKxcz5ZcPaP028/m9M7vvWQQh4xZ+CLLuwsbH3+4k8bW3s285c71s7vnnD47x2Jt8ZeO0Kflj49QUdrxxTRz3z48MHXi989frJlfWvxe3sOvP847Nq9t+dP/bGBtfwHeAQz+fURAAA="
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
      