import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {Image} from 'native-base'
import { useNavigation } from "@react-navigation/native";
import { theme } from "client/src/utils/theme.js";

const Footer = () => {
  const navigation = useNavigation();

  const onHomePress = () => {
    console.log("onHomePress...");
    navigation.navigate("ProductList");
  };

  const onCartPress = () => {
    console.log("onCartPress...");
    navigation.navigate("Cart");
  };

  const onOrdersPress = () => {
    console.log("onOrdersPress...");
    // navigation.navigate('')
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity activeOpacity={.7} onPress={onHomePress} style={styles.footerButton}>
        <Image source={require("client/assets/icons/home-white.png")} style={styles.icon}/>
        <Text style={styles.footerButtonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={.7} onPress={onCartPress} style={styles.footerButtonAlt}>
        <Image source={require("client/assets/icons/cart-white.png")} style={styles.icon}/>
        <Text style={styles.footerButtonText}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={.7} onPress={onOrdersPress} style={styles.footerButton}>
        <Image source={require("client/assets/icons/order-history-white.png")} style={styles.icon}/>
        <Text style={styles.footerButtonText}>Orders</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // backgroundColor:'white'
  },
  footerButton: {
    flex: 1,
    paddingVertical: 7,
    backgroundColor: "#0284c7",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "white",
  },
  footerButtonAlt: {
    flex: 1,
    paddingVertical: 7,
    backgroundColor: "#0ea5e9",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "white",
  },
  footerButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  icon:{
      height: 16,
      width: 16
  }
});

export default Footer;
