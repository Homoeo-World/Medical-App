import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Card, Button, Icon } from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const medicineImage = require('client/assets/default-medicine.jpg');
import auth from 'client/src/utils/auth.js'

const ProductCard = ({ product }) => {

  const navigation = useNavigation();

  const [addedToCart, setAddedToCart] = useState(false);

  const handleCardPress = () => {
    console.log('handleCardPress...'); 
    console.log(product);
    navigation.navigate('Product Details', {product});
  }

  const handleBuyPress = () => {
    console.log('handleBuyPress...')
    console.log(product);
    navigation.navigate('Cart');
  }

  const handleAddtoCartPress = async () => {
    console.log('handleAddtoCartPress...');
    setAddedToCart(true); //remove

    try{
      const { authToken, cart } = await auth.getAuthAndCartData();
      console.log('authToken: ', authToken);
      console.log('cart: ',cart);
      // const existingItemIndex = cart.findIndex((item) => item.title === product.title);
      // let updatedCart;

      // if(existingItemIndex !== -1){
      //   updatedCart = [...cart];
      //   updatedCart[existingItemIndex].quantity += 1;
      // }
      // else{
      //   const itemToAdd = {title: product.title, quantity: 1, price: product.price};
      //   updatedCart = [...cart, itemToAdd];
      // }
      // await auth.storeAuthAndCartData(authToken, updatedCart);
      // console.log('Item added to cart:', updatedCart);
      setAddedToCart(true);

    }
    catch(error){
      console.error('Error adding item to cart:', error);

    }
    
  }

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
                    borderColor: 'red',
                    borderWidth: 1,
                    borderRadius: 5,
                    marginRight:5
                  }}
                >
                  <Text style={{ color: 'red' }}>Buy</Text>
                </Button>
                {/* after clicking on add to cart */}
                {!addedToCart ? 
                (<Button
                  onPress={handleAddtoCartPress}
                  small
                  style={{
                    width:80,height:40,
                    backgroundColor: 'red',
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
                    backgroundColor: 'red',
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
