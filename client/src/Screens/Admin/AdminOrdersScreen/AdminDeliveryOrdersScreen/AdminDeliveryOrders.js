import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { NativeBaseProvider, Box, Text, Heading, Divider } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { theme } from "client/src/utils/theme.js";


function AdminDeliveryOrders() {

  const navigation = useNavigation();

  const dummyData = {
    orderId: '123456',
    username: 'John Doe',
    orderTimestamp: '2023-10-30 10:30 AM',
    orderStatus: 'Delivered',
    shippingAddress: '123 Main St, City, Country',
  };


  return (
    <View style={styles.container}>
       <Box
      bg="white"
      p={4}
      borderWidth={1}
      borderColor="gray.300"
      borderRadius={8}
      style= {styles.Box}
    >
      <Heading size="md" mb={2}>
        Order ID: {dummyData.orderId}
      </Heading>
      <Divider my={2} />

      <Text fontWeight="bold">Username: {dummyData.username}</Text>
      <Text>Order Placed: {dummyData.orderTimestamp}</Text>
      
      <Divider my={2} />

      <Text fontWeight="bold">Shipping Address:</Text>
      <Text>{dummyData.shippingAddress}</Text>

      <Divider my={2}/>

      <Text style={{color:'green', fontWeight:'bold'}}>Order Status: {dummyData.orderStatus}</Text>
    </Box>
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <AdminDeliveryOrders />
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
    }
});
