import React, {useState} from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import {NativeBaseProvider, Card} from 'native-base';
import { fontSize } from 'styled-system';


function Cart(){
    const cartItems = [
        { id: '1', name: 'Lecopene', price: '₹10.00', quantity: 2 },
        { id: '2', name: 'oxymoron', price: '₹15.07', quantity: 1 },
        { id: '3', name: 'oxybenzene 18 Omez 30', price: '₹20.00', quantity: 3 },
       
      ];

      // Sample payment details
        const cartTotal = 100;
        const medicineDiscount = 10;
        const couponDiscount = 5;
        const orderTotal = cartTotal - medicineDiscount - couponDiscount;
            
      const renderCartItem = (item) => (
          <View style={{flexDirection:'column', backgroundColor: 'white', marginBottom: 20}}>
        <View style={styles.cartItem} key={item.id}>

          <View style={styles.cartItemInfo}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>

          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantity}>{item.quantity}</Text>

            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={{alignItems:'center', paddingBottom: 20}}>
            <TouchableOpacity >
            <Text style={{color:'blue'}}>Remove</Text>
            </TouchableOpacity>
        </View>
        
        </View>

      );
    
      const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    
      return (
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.cartList}>
            {cartItems.map((item) => renderCartItem(item))}

            {/* Payment Details Card */}
            <Text style={{fontSize: 18, marginVertical: 12}}>Payment Details</Text>    
            <Card style={styles.paymentDetailsContainer}>
            
            <View style={styles.detailRow}>
                <Text>Cart Total:</Text>
                <Text>{cartTotal}</Text>
            </View>

            <View style={styles.detailRow}>
                <Text>Medicine Discount:</Text>
                <Text>{medicineDiscount}</Text>
            </View>

            <View style={styles.detailRow}>
                <Text>Coupon Discount:</Text>
                <Text>{couponDiscount}</Text>
            </View>

            <View style={styles.detailRow}>
                <Text style={styles.orderTotalText}>Order Total:</Text>
                <Text style={styles.orderTotal}>{orderTotal}</Text>
            </View>
            </Card>
          </ScrollView>

            

          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#F7F7F7',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    cartList: {
      flex: 1,
      marginBottom: 20
    },
    cartItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingTop: 16,
      marginBottom: 12,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 2,
    },
    cartItemInfo: {
      flex: 1,
    },
    itemName: {
      fontSize: 14,
      marginBottom: 6
    //   fontWeight: 'bold',
    },
    itemPrice: {
      fontSize: 16,
      color: 'black',
      fontWeight: 'bold',
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    quantityButton: {
    //   backgroundColor: 'lightgray',
     borderWidth: 1,
      borderColor: 'lightgrey',
      width: 25,
      height: 25,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8
    },
    quantityButtonText: {
      fontSize: 18,
    //   fontWeight: 'bold',
      color: 'blue'
    },
    quantity: {
      fontSize: 20,
      marginHorizontal: 16,
    },
    totalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 16,
      backgroundColor: 'white',
      borderRadius: 8,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOffset: { width: 0, height: -4 },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 2,
    },
    totalText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 16,
    },
    totalPrice: {
      fontSize: 24,
      fontWeight: 'bold',
      marginRight: 16,
    },
    checkoutButton: {
      backgroundColor: 'blue',
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
    },
    checkoutButtonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    paymentDetailsContainer: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        elevation: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginBottom: 20
      },
      detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
      },
      orderTotalText: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      orderTotal: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
      },
  });
  

export default () => {
    return (
      <NativeBaseProvider>
       
          <Cart />
        
      </NativeBaseProvider>
    )
  }