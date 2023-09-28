import axios from 'axios'

//login-signup
const url = 'http://192.168.42.117:5000/login';

export const postCredentials = async (creds) => await axios.post(url,creds);  //on signup page
export const validateCredentials = async (creds) => await axios.post(`${url}/validate`, creds); //login page for authentication


//product
export const getProducts = async (page, pageSize) => await axios.get('http://192.168.42.117:5000/product/getproducts', {
    params: {
        page: page,
        pageSize: pageSize,
    },
});
export const searchProducts = async (searchTerm) => await axios.get('http://192.168.0.124:5000/product/searchproducts', {
    params: {
        searchTerm: searchTerm
    }
});
export const getProductByTitle = async (title) => await axios.get('http://192.168.0.124:5000/product/getproductbytitle', {
    params:{
        title: title
    }
});