import React, { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { NativeBaseProvider, Box, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { theme } from "client/src/utils/theme.js";

function AdminHome() {
  const navigation = useNavigation();

  const goToStatisticsScreen = () => {
    navigation.navigate('');
  }

  const goToManageProductsScreen = () => {
      navigation.navigate('Manage Products')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToStatisticsScreen}>
        <Box
          shadow={2}
          rounded="lg"
          _text={{
            fontSize: 40,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
          style={styles.statisticsBox}
        >
          Statistics
        </Box>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToManageProductsScreen}>
        <Box
          shadow={2}
          rounded="lg"
          _text={{
            fontSize: 40,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
          style={styles.statisticsBox}
        >
          Products
        </Box>
      </TouchableOpacity>

      <TouchableOpacity>
        <Box
          shadow={2}
          rounded="lg"
          _text={{
            fontSize: 40,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
          style={styles.statisticsBox}
        >
          Orders
        </Box>
      </TouchableOpacity>
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <AdminHome />
    </NativeBaseProvider>
  );
};
