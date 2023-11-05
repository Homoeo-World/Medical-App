import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeBaseProvider, Box, Heading, Divider } from "native-base";
import { theme } from "client/src/utils/theme.js";

function OrderScreen(){
  const [selectedOption, setSelectedOption] = useState('delivery');

  const dummyData = {
    orderId: '123456',
    username: 'John Doe',
    orderTimestamp: '2023-10-30 10:30 AM',
    orderStatus: 'Delivered',
    shippingAddress: '123 Main St, City, Country',
  };

  return (
    <View style={styles.container}>
      <View style={styles.radioButtons}>
        <TouchableOpacity
          style={[
            styles.radioButton,
            selectedOption === 'delivery' && styles.selected,
          ]}
          onPress={() => setSelectedOption('delivery')}
        >
          <Text style={[styles.radioButtonText, styles.radioText,selectedOption === 'delivery' && styles.radioTextSelected]}>Delivery Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.radioButton,
            selectedOption === 'takeaway' && styles.selected,
          ]}
          onPress={() => setSelectedOption('takeaway')}
        >
          <Text style={[styles.radioButtonText, styles.radioText, selectedOption === 'takeaway' && styles.radioTextSelected]}>Takeaway Orders</Text>
        </TouchableOpacity>
      </View>
      {/* Rest of your content goes here */}
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  radioButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  radioButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: theme.primaryColor,
    backgroundColor: 'transparent',
  },
  radioButtonText: {
    fontSize: 16,
    color: theme.primaryColor,
  },
  selected: {
    backgroundColor: theme.primaryColor,
  },
  radioText: {
    color: 'black',
  },
  radioTextSelected:{
    color:'white'
  },
  Box:{
    margin: '5%',
    padding: '5%',
}
});

export default () => {
  return (
    <NativeBaseProvider>
      <OrderScreen />
    </NativeBaseProvider>
  );
};