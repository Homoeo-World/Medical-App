import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

// const apiBaseUrl = Config.API_BASE_URL;
const apiBaseUrl = 'https://medical-app-5gdu.onrender.com'

export const postCredentials = async (creds) => await axios.post(`${apiBaseUrl}/login`,creds);  //on signup page
export const validateCredentials = async (creds) => await axios.post(`${apiBaseUrl}/login/validate`, creds); //login page for authentication

//product
export const getProducts = async (page, pageSize) => await axios.get(`${apiBaseUrl}/product/getproducts`, {
    params: {
        page: page,
        pageSize: pageSize,
    },
});
export const searchProducts = async (searchTerm) => await axios.get(`${apiBaseUrl}/product/searchproducts`, {
    params: {
        searchTerm: searchTerm
    }
});
export const getProductByTitle = async (title) => await axios.get(`${apiBaseUrl}/product/getproductbytitle`, {
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
      
    const response = await axios.post(`${apiBaseUrl}/login/addnewaddress`,{newAddress: newAddress},{headers});
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
    const response = await axios.get(`${apiBaseUrl}/login/getaddressesbyuser`,{headers});
    // console.log('response: ', response.data);
    return response.data;
}
