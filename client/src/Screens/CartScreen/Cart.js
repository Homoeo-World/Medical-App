import React, { useEffect, useState } from "react";
import {View, FlatList, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import { NativeBaseProvider, Card, Box, Row, Image, Button } from "native-base";
import Footer from '../../components/Footer/Footer';
import * as auth from "client/src/utils/auth.js";
import { useNavigation, useRoute } from "@react-navigation/native";
import { borderLeft, flex, marginBottom } from "styled-system";
import { theme } from "client/src/utils/theme.js";
import styles from "./styles";

function Cart() {
  const navigation = useNavigation();

  const route = useRoute();
  console.log("route: ", route);

  const [cartItems, setCartItems] = useState([]);
  const [authToken, setAuthToken] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [isAddressSelected, setIsAddressSelected] = useState(false);


  useEffect(() => {
    async function fetchData() {
      console.log("fetchData...");
      if (
        route.params !== undefined &&
        route.params.selectedAddress !== undefined
      ) {
        setSelectedAddress(route.params.selectedAddress);
        setIsAddressSelected(true);
        // console.log('selectedAddress: ', selectedAddress)
      }

      try {
        const response = await auth.getAuthAndCartData();

        if (response) {
          setAuthToken(response.authToken);
          setCartItems(response.cart);
        }
      } catch (error) {
        console.error("Cart Screen: Error fetching the cart data:", error);
      }
    }

    fetchData();
  }, [route]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const updateCartData = async () => {
      // console.log('cartItems changed:', cartItems);
      const response = await auth.storeAuthAndCartData(authToken, cartItems);
      // console.log('storeAuthAndCartData Response: ', response);
    };

    updateCartData();
  }, [cartItems]);

  const onAddItemsPress = () => {
     navigation.navigate('Product List');
  }

  const removeItemfromCart = async (index) => {
    console.log("removeItemfromCart...");

    const indexToRemove = index;

    if (indexToRemove >= 0 && indexToRemove < cartItems.length) {
      setCartItems((prevCartItems) => {
        // Create a copy of the previous cartItems to make modifications
        const newCartItems = [...prevCartItems];
        newCartItems.splice(indexToRemove, 1);
        return newCartItems;
      });
      console.log("cartItems: ", cartItems);
      // const response = await auth.storeAuthAndCartData(authToken, cartItems);
      // console.log('storeAuthAndCartData Respone: ', response);
    } else {
      console.error("invalid index to remove:", indexToRemove);
    }
  };

  const incrementQuantity = async (index) => {
    console.log("increment quantity...");

    try {
      // const response = await auth.getAuthAndCartData();
      // console.log(response);

      setCartItems((prevCartItems) => {
        const newCartItems = [...prevCartItems];
        newCartItems[index].quantity += 1;
        return newCartItems;
      });
    } catch (error) {
      console.error("Error while incrementing: ", error);
    }
  };

  const decrementQuantity = async (index) => {
    console.log("decrement quantity...");

    try {
      // const response = await auth.getAuthAndCartData();
      // console.log(response);

      if (cartItems[index].quantity === 1) {
        await removeItemfromCart(index);
        return;
      }

      setCartItems((prevCartItems) => {
        // Create a copy of the previous cartItems to make modifications
        const newCartItems = [...prevCartItems];
        newCartItems[index].quantity -= 1;
        return newCartItems; // Return the new state
      });
    } catch (error) {
      console.error("Error while decrementing: ", error);
    }
  };

  const onSelectAddressPress = async () => {
    console.log("onSelectAddressPress...");
    navigation.navigate("Select Address");
  };

  const onChangeAddressPress = async () => {
    console.log("onChangeAddressPress...");
    navigation.navigate("Select Address");
  };

  const onConfirmOrderPress = async () => {
    console.log("onConfirmOrderPress...");
    navigation.navigate("Order Placed");
  };

 

  const renderCartItem = (item, index) => (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: "white",
        marginBottom: 20,
      }}
    >
      <View style={styles.cartItem} key={index}>
        <View style={styles.cartItemInfo}>
          <Text style={styles.itemName}>{item.title}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
        </View>

        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => decrementQuantity(index)}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.quantity}>{item.quantity}</Text>

          <TouchableOpacity
            onPress={() => incrementQuantity(index)}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.removeButtonContainer}>
        <TouchableOpacity onPress={() => removeItemfromCart(index)} style={styles.removeButton}>
           <Image source={require("client/assets/icons/delete.png")} style={styles.icon}/>
            <Text style={{ color: theme.primaryColor }}>Remove</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />
    </View>
  );

  const calculatecartTotal = () => {
    console.log('calculatecartTotal...')
    let cartTotal = 0;
    cartItems.forEach((item)=>{
      console.log(cartItems);
      cartTotal = cartTotal + item.price.split(' ')[1] * item.quantity;
    })
    return cartTotal;
  }

  const cartTotal = calculatecartTotal();
  const medicineDiscount = 0;
  const couponDiscount = 0;
  // const orderTotal = cartTotal - medicineDiscount - couponDiscount;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.cartList}>
        {cartItems.length !== 0 && (
          <>
            {cartItems.map((item, index) => renderCartItem(item, index))}
            {isAddressSelected && (
              <View style={{marginVertical: 15}}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.addressHeaderText}>
                    Deliver to this address
                  </Text>
                  <TouchableOpacity onPress={onChangeAddressPress} style={styles.changeButton}>
                    <Text style={{ color: theme.primaryColor, fontWeight: 'bold' }}>Change</Text>
                  </TouchableOpacity>
                </View>
                <Box shadow={1} style={styles.addressCard}>
                  <Text style={{ flex: 1 }}>{selectedAddress}</Text>
                </Box>
              </View>
            )}
            <Text style={{ fontSize: 18, marginVertical: 12 }}>
              Payment Details
            </Text>
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
                <Text style={styles.orderTotal}>{cartTotal - medicineDiscount - couponDiscount}</Text>
              </View>
            </Card>
          </>
        )}
        {cartItems.length === 0 && 
        <View style={{ justifyContent:'center', alignItems:'center', alignContent:'center'}}>
          <Text>No items in the Cart</Text>
          <Button onPress={onAddItemsPress} style={styles.button}>+ Start Shopping</Button>
        </View>
        }
      </ScrollView>

      {!isAddressSelected && (
        <TouchableOpacity
          onPress={onSelectAddressPress}
          disabled={cartItems.length === 0}
          style={[
            styles.checkoutButton,
            cartItems.length === 0 && styles.disabledButton,
          ]}
        >
          <Text style={styles.checkoutButtonText}>Select Address</Text>
        </TouchableOpacity>
      )}

      {isAddressSelected && (
        <TouchableOpacity
          onPress={onConfirmOrderPress}
          style={styles.checkoutButton}
        >
          <Text style={styles.checkoutButtonText}>Confirm Order</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}



export default () => {
  return (
    <NativeBaseProvider>
      <Cart />
      {/* <Footer currentScreen='Cart'/> */}
    </NativeBaseProvider>
  );
};