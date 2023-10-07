import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import {Button, Box } from "native-base";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as auth from "client/src/utils/auth.js";
import { theme } from "client/src/utils/theme.js";

const ProductCard = ({ product }) => {
  const navigation = useNavigation();

  const [addedToCart, setAddedToCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const updateCartData = async () => {
      console.log("ProductCard: updateCartData...");
      console.log("cartItems: ", cartItems);

      const jwtToken = await AsyncStorage.getItem("authToken");
      const authToken = JSON.parse(jwtToken);

      if (cartItems != undefined && cartItems != null) {
        const response = await auth.storeAuthAndCartData(authToken, cartItems);
      }
      console.log(response);
    };

    updateCartData();
  }, [cartItems]);

  const incrementQuantity = async () => {
    console.log("increment quantity...");
    setQuantity(quantity + 1);

    const existingItemIndex = cartItems.findIndex(
      (item) => item.title === product.title
    );
    if (existingItemIndex !== -1) {
      updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      // setQuantity(updatedCart[existingItemIndex].quantity);
    } else {
      updatedCart = [
        ...cart,
        { title: product.title, quantity: 1, price: product.price },
      ];
    }
    setCartItems(updatedCart);
  };

  const decrementQuantity = async () => {
    console.log("decrement quantity...");
    if (quantity >= 1) setQuantity(quantity - 1);
  };

  const handleAddtoCartPress = async () => {
    console.log("handleAddtoCartPress...");
    setQuantity(quantity + 1);

    let authToken;
    let updatedCart = [];

    const response = await auth.getAuthAndCartData();

    console.log("getAuthAndCartData response", response);

    if (response && response.authToken && response.cart) {
      authToken = response.authToken;
      const cart = response.cart;
      // setCartItems(response.cart);
      const existingItemIndex = cart.findIndex(
        (item) => item.title === product.title
      );

      if (existingItemIndex !== -1) {
        updatedCart = [...cart];
        updatedCart[existingItemIndex].quantity += 1;
        setQuantity(updatedCart[existingItemIndex].quantity);
      } else {
        updatedCart = [
          ...cart,
          { title: product.title, quantity: 1, price: product.price },
        ];
      }
      setCartItems(updatedCart);
    } else {
      console.log("response is null...");
      const storedToken = await AsyncStorage.getItem("authToken");
      authToken = JSON.parse(storedToken);
      updatedCart = [
        { title: product.title, price: product.price, quantity: 1 },
      ];
      setCartItems(updatedCart);
      setQuantity(updatedCart[0].quantity);
    }

    if (authToken !== null && updatedCart !== null) {
      await auth.storeAuthAndCartData(authToken, updatedCart);
      // console.log('Item added to cart:', updatedCart);
      setAddedToCart(true);
    }
  };

  const handleCardPress = () => {
    console.log("handleCardPress...");
    console.log(product);
    navigation.navigate("Product Details", { product });
  };

  const handleBuyPress = async () => {
    console.log("handleBuyPress...");
    console.log(product);
    await handleAddtoCartPress();
    navigation.navigate("Cart");
  };

  return (
    <Box shadow={0} style={styles.boxContainer}>
      <View style={{ marginHorizontal: 10 }}>
        <TouchableOpacity activeOpacity={0.7} onPress={handleCardPress}>
          <>
            <Image source={require("client/assets/default-medicine.jpg")} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.quantity}>{product.quantity}</Text>
            <Text style={styles.price}>{product.price}</Text>
          </>
        </TouchableOpacity>

        {/* Buy and add-to-cart button */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Button bordered onPress={handleBuyPress} style={styles.buyButton}>
            <Text style={{ color: theme.primaryColor }}>Buy</Text>
          </Button>
          {/* after clicking on add to cart */}
          {quantity <= 0 ? (
            <Button onPress={handleAddtoCartPress} small style={styles.addToCartButton}>
              <View style={{ flexDirection: "row" }}>
              <Image source={require("client/assets/icons/cart-white.png")} style={styles.icon}/>
                <Text style={{ color: "white" }}>Add</Text>
              </View>
            </Button>
          ) : (
            <View style={styles.cartItem}>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={decrementQuantity} style={styles.quantityButton}>
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>

                <View style={styles.quantityDisplay}>
                  <Text style={styles.quantityText}>{quantity}</Text>
                </View>

                <TouchableOpacity onPress={incrementQuantity} style={styles.quantityButton}>
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    </Box>
  );
};

export const styles = StyleSheet.create({
  boxContainer: {
    width: "50%",
    backgroundColor: "white",
    // marginTop: 10,
    // marginLeft: 3,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  title: {
    color: "black",
    fontSize: 13,
    fontWeight: "bold",
    height: 40,
  },
  quantity: {
    color: "grey",
    fontSize: 11,
    marginTop: 10,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
  },
  buyButton: {
    width: 65,
    height: 40,
    backgroundColor: "white",
    borderColor: theme.primaryColor,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 5,
  },
  addToCartButton: {
    width: 65,
    height: 40,
    backgroundColor: theme.primaryColor,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  // buttonText: {
  //   color: theme.primaryColor,
  // },
  addedToCartText: {
    color: "white",
  },
  cartItem: {
    backgroundColor: "white",
    // padding: 10,
    // borderRadius: 5,

    flexDirection: "row",
    alignItems: "center",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.primaryColor,
  },
  quantityButton: {
    width: 30,
    height: 30,
    backgroundColor: theme.primaryColor,
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 5,
    // marginHorizontal: 5,
  },
  quantityDisplay: {
    width: 30,
    height: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 5,
  },
  quantityText: {
    fontSize: 14,
  },
  buttonText: {
    fontSize: 14,
    color: "white",
  },
  icon:{
    height: 16,
    width: 16
}
});

export default ProductCard;
