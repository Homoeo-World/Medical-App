import React, { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { NativeBaseProvider, Box, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { theme } from "client/src/utils/theme.js";


function AdminOrders() {

  const navigation = useNavigation();

  const onDeliveryOrdersPress = () => {
    navigation.navigate('Admin Delivery Orders')
  }

  const onTakeawayOrdersPress = () => {
    navigation.navigate('Admin Takeaway Orders')
  }

  return (
    <View style={styles.container}>
       <TouchableOpacity activeOpacity={0.8} onPress={onDeliveryOrdersPress}>
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
          Delivery Orders
        </Box>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8} onPress={onTakeawayOrdersPress}>
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
          Takeaway Orders
        </Box>
      </TouchableOpacity>
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <AdminOrders />
    </NativeBaseProvider>
  );
};
