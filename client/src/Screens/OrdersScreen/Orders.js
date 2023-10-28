import React, { useEffect, useState } from "react";
import {View, FlatList, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import { NativeBaseProvider, Card, Box, Row, Image, Button } from "native-base";
import Footer from '../../components/Footer/Footer';
import styles from "./styles";

function Orders(){

    return(
      <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onAddNewProductPress}>
       <Box
         shadow={2}
         rounded="lg"
         _text={{
           fontSize: 20,
           fontWeight: "bold",
           color: "white",
           textAlign: "center",
         }}
         style={styles.Box}
       >
         Add new Product
       </Box>
     </TouchableOpacity>

     <TouchableOpacity activeOpacity={0.8} onPress={onUpdateProductPress}>
       <Box
         shadow={2}
         rounded="lg"
         _text={{
           fontSize: 20,
           fontWeight: "bold",
           color: "white",
           textAlign: "center",
         }}
         style={styles.Box}
       >
         Update Product
       </Box>
     </TouchableOpacity>

     <TouchableOpacity activeOpacity={0.8}>
       <Box
         shadow={2}
         rounded="lg"
         _text={{
           fontSize: 20,
           fontWeight: "bold",
           color: "white",
           textAlign: "center",
         }}
         style={styles.Box}
       >
         Delete Product
       </Box>
     </TouchableOpacity>
   </View>
    )
}

export default () => {
    return (
      <NativeBaseProvider>
        <Orders />
        <Footer currentScreen='Orders'/>
      </NativeBaseProvider>
    );
  };