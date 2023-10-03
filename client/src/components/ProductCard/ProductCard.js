import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Card, Button, Icon } from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const medicineImage = require('client/assets/default-medicine.jpg');
import * as auth from 'client/src/utils/auth.js';
import {theme} from 'client/src/utils/theme.js' ;

const ProductCard = ({ product }) => {

  const navigation = useNavigation();

  const [addedToCart, setAddedToCart] = useState(false);

  const handleCardPress = () => {
    console.log('handleCardPress...'); 
    console.log(product);
    navigation.navigate('Product Details', {product});
  }

  const handleBuyPress = async () => {
    console.log('handleBuyPress...')
    console.log(product);
    await handleAddtoCartPress();
    navigation.navigate('Cart');
  }

  const handleAddtoCartPress = async () => {
    try {
      console.log('handleAddtoCartPress...');
      
      let authToken;
      let updatedCart = [];

      const response = await auth.getAuthAndCartData();
      // console.log('getAuthAndCartData response', response);
  
      if (response && response.authToken && response.cart) {
        authToken = response.authToken;
        const cart = response.cart;
        // console.log('authToken: ', authToken);
        // console.log('cart: ', cart);
  
        const existingItemIndex = cart.findIndex((item) => item.title === product.title);
  
        if (existingItemIndex !== -1) {
          updatedCart = [...cart];
          updatedCart[existingItemIndex].quantity += 1;
        } else {
          updatedCart = [...cart, { title: product.title, quantity: 1, price: product.price }];
        }
      } 
      else {
        console.log('response is null...')
        const storedToken = await AsyncStorage.getItem('authToken');
        authToken = JSON.parse(storedToken);
        // console.log('authToken... ', authToken);
        updatedCart = [{ title: product.title, price: product.price, quantity: 1 }];
      }
  
      if (authToken !== null && updatedCart !== null) {
        await auth.storeAuthAndCartData(authToken, updatedCart);
        // console.log('Item added to cart:', updatedCart);
        setAddedToCart(true);
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };
  

  return (
    <TouchableWithoutFeedback onPress={handleCardPress}>
      <Card style={{ width: '48%', backgroundColor:'white', marginTop: 10, marginHorizontal:3}}>
            <View>
              <Image
                source={medicineImage} xz
                style={{ width: '100%', height: 150, resizeMode: 'cover'}}
              />
              <Text style={{ color: 'black', fontSize: 13, fontWeight:'bold', height: 40 }}>{product.title}</Text>
              <Text style={{ color:'grey',fontSize: 11, marginTop: 10 }}>{product.quantity}</Text>
              <Text style={{ fontSize: 15, fontWeight:'bold' }}>{product.price}</Text>

              {/* Buy and add-to-cart button */}
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <Button
                  onPress={handleBuyPress}
                  bordered
                  style={{
                    width:60,height:40,
                    backgroundColor: 'white',
                    borderColor: theme.primaryColor,
                    borderWidth: 1,
                    borderRadius: 5,
                    marginRight:5
                  }}
                >
                  <Text style={{ color: theme.primaryColor }}>Buy</Text>
                </Button>
                {/* after clicking on add to cart */}
                {!addedToCart ? 
                (<Button
                  onPress={handleAddtoCartPress}
                  small
                  style={{
                    width:80,height:40,
                    backgroundColor: theme.primaryColor,
                    paddingHorizontal: 10,
                    borderRadius: 5,
                    flexDirection: 'row', 
                    alignItems: 'center', 
                  }}
                >
                <MaterialCommunityIcons
                  name="cart-outline"
                  size={16} 
                  color="white" 
                  style={{ marginRight: 5 }}
                />
                <Text style={{ color: 'white' }}>Add</Text>
              </Button>): 
                (<Button
                  small
                  style={{
                    width:80,height:40,
                    backgroundColor: theme.primaryColor,
                    paddingHorizontal: 10,
                    borderRadius: 5,
                    flexDirection: 'row', 
                    alignItems: 'center', 
                  }}
                >
                <Text style={{ color: 'white' }}>Added to cart</Text>
              </Button>)
                }
                
      </View>
            </View>
          </Card>

     </TouchableWithoutFeedback>
    
  );
};

export default ProductCard;
