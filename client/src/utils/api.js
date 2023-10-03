import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

//login-signup
// const url = 'http://192.168.42.117:5000/login';
// const render_url = 'https://medical-app-5gdu.onrender.com'
const login_url = 'https://medical-app-5gdu.onrender.com/login'

export const postCredentials = async (creds) => await axios.post(login_url,creds);  //on signup page
export const validateCredentials = async (creds) => await axios.post(`${login_url}/validate`, creds); //login page for authentication


//product
export const getProducts = async (page, pageSize) => await axios.get('https://medical-app-5gdu.onrender.com/product/getproducts', {
    params: {
        page: page,
        pageSize: pageSize,
    },
});
export const searchProducts = async (searchTerm) => await axios.get('https://medical-app-5gdu.onrender.com/product/searchproducts', {
    params: {
        searchTerm: searchTerm
    }
});
export const getProductByTitle = async (title) => await axios.get('https://medical-app-5gdu.onrender.com/product/getproductbytitle', {
    params:{
        title: title
    }
});

//address
export const postNewAddress = async (newAddress) => {
    console.log('postNewAddress...')
    const jwtToken = await AsyncStorage.getItem('authToken');
    const authToken = JSON.parse(jwtToken); 
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      };
      
    const response = await axios.post('https://medical-app-5gdu.onrender.com/login/addnewaddress',{newAddress: newAddress},{headers});
    // console.log('response: ', response);
    return response.data;
}
export const getAddressesbyUser = async () => {
    console.log('getAddressesbyUser...')
    const jwtToken = await AsyncStorage.getItem('authToken');
    const authToken = JSON.parse(jwtToken); 
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      };
    const response = await axios.get('https://medical-app-5gdu.onrender.com/login/getaddressesbyuser',{headers});
    // console.log('response: ', response.data);
    return response.data;
}
