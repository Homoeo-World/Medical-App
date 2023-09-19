import React from 'react';

import Login from './src/Screens/Login/Login';
import Signup from './src/Screens/SignUp/Signup';
import ProductList from './src/Screens/ProductList/ProductList';
import ProductDetail from './src/Screens/ProductDetailScreen/ProductDetail';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      {/* working on this screen -- temp*/}
      <Stack.Screen name="Product Detail" component={ProductDetail} options={{headerStyle: {
         
          borderBottomWidth: 1, // Add a 1-pixel border at the bottom
          borderBottomColor: '#ccc', // Set the border color to grey
        }}} />

      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
      <Stack.Screen name="ProductList" component={ProductList} options={{title: 'Medicines'}}/> 
      
      
    </Stack.Navigator>
  );
}


export default () => {
  return (
    <NavigationContainer>
     
        <App />
      
    </NavigationContainer>
  )
}