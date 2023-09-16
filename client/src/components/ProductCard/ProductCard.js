import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, Button, Icon } from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
const medicineImage = require('client/assets/default-medicine.jpg');

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: '48%', backgroundColor:'white', marginTop: 10, marginHorizontal:3}}>
      <View>
        <Image
          source={medicineImage} 
          style={{ width: '100%', height: 150, resizeMode: 'cover'}}
        />
        <Text style={{ color: 'black', fontSize: 13, fontWeight:'bold' }}>{product.title}</Text>
        <Text style={{ color:'grey',fontSize: 11, marginTop: 10 }}>{product.quantity}</Text>
        <Text style={{ fontSize: 15, fontWeight:'bold' }}>{product.price}</Text>

        {/* Buy and add-to-cart button */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
  <Button
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
  {

  }

  <Button
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
  </Button>
</View>
      </View>
    </Card>
  );
};

export default ProductCard;
