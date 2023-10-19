import React, { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { NativeBaseProvider, Box, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { theme } from "client/src/utils/theme.js";

function ManageProducts() {

  return (
    <View style={styles.container}>
       <TouchableOpacity >
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

      <TouchableOpacity>
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

      <TouchableOpacity>
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
