import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { Container, Content, Card, CardItem, Body, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
const medicineImage = require('client/assets/default-medicine.jpg');
import {theme} from 'client/src/utils/theme.js' ;

const SingleProduct = ({ product }) => {

  const navigation = useNavigation();

  const handleBuyPress = () => {
    console.log('handleBuyPress...')
    console.log(product);
    navigation.navigate('Cart');
  }

    return (
    <View style={styles.productDetails}>
        <View>
            <Text style={styles.productTitle}>{product.title}</Text>
            <Text style={styles.productCompany}>{product.company}</Text>
        </View>

    <View style={styles.line} />  
        <Image
            source={medicineImage}
            style={styles.productImage}
        />
    <View style={styles.line} /> 

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.productPrice}>{product.price}</Text>
          <Text style={styles.productMRP}>MRP 29.85</Text>
        </View>
        

        <View style={{flexDirection: 'row', justifyContent: 'center', padding: 20}}>
            <Button 
            onPress={handleBuyPress}
            bordered 
            style={styles.buyNow}>
                <Text style={{ color: theme.primaryColor }}>Buy Now</Text>
            </Button>
            <Button style={styles.addtoCart}>
                <Text style={{ color: 'white' }}>Add to Cart</Text>
            </Button>
        </View >
    </View>
    )
  };

//   const screenWidth = Dimensions.get('window').width;
//   const imageWidth = (screenWidth * 95) / 100;


  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      marginBottom: 16,
    },
    productImage: {
      width: '99%',
      height: 300,
      resizeMode: 'cover',
      marginRight: 16,
    //   borderWidth: 1,
    //   borderColor: '#ccc',
    },
    productDetails: {
      flex: 1,
    },
    productTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      paddingTop:8,
      paddingLeft: 10
    },
    productCompany:{
      fontSize: 15,
      fontWeight: 'normal',
      marginBottom: 8,
      color: 'grey',
      paddingLeft: 10
    },
    productPrice: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
      paddingLeft: 10,
    },
    productMRP: {
        fontSize: 11,
        fontWeight: '100',
        color: 'grey',
        textDecorationLine:'line-through',
        paddingLeft: 10,
      },
      buyNow:{
        width:100,height:40,
        backgroundColor: 'white',
        borderColor: theme.primaryColor,
        borderWidth: 1,
        borderRadius: 5,
        marginRight:5,
        
      },
      addtoCart:{
        width: 150,height:40,
        backgroundColor: theme.primaryColor,
        borderColor: theme.primaryColor,
        borderWidth: 1,
        borderRadius: 5,
        marginRight:5
      },
      line: {
        width: '100%',
        height: 1, // Specify the height of the line
        backgroundColor: 'lightgrey', // Specify the line color
        marginBottom: 8, // Adjust the margin as needed
      },

    // Add styles for other product details as needed
  });
  
  
  export default SingleProduct;
  
