import React, { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { NativeBaseProvider, Box, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { theme } from "client/src/utils/theme.js";


function ManageProducts() {

  const navigation = useNavigation();

  const onAddNewProductPress = () => {
    navigation.navigate('Add New Product')
  }

  const onUpdateProductPress = () => {
    navigation.navigate('Update Product')
  }

  return (
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
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <ManageProducts />
    </NativeBaseProvider>
  );
};
