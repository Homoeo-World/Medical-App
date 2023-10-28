import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { NativeBaseProvider, Box, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { theme } from "client/src/utils/theme.js";


function AdminTakeawayOrders() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       <Text>Admin takeaway orders page</Text>
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <AdminTakeawayOrders />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#f0f0f0",
    },
    Box:{
        margin: '5%',
        padding: '5%',
        backgroundColor: theme.primaryColor,
    }
});
