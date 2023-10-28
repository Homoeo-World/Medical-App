import React, { useState } from 'react';
import { ScrollView, Text, TextInput, StyleSheet } from 'react-native';
import {Button, NativeBaseProvider} from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import { theme } from "client/src/utils/theme.js";
import { margin } from 'styled-system';

const UpdateProductForm = () => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');
  const [mrp, setMRP] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState('');
  const [availabilityStatus, setAvailabilityStatus] = useState('');

  const route = useRoute();
  const { product } = route.params;

  console.log(route.params);
  console.log('product.....');console.log(product);

  const addQuantity = () => {
    console.log('add quantity...');
  };

  const updateProduct = () => {
    console.log('update product...');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Product Title"
      />

      <Text style={styles.label}>Company:</Text>
      <TextInput
        style={styles.input}
        value={company}
        onChangeText={setCompany}
        placeholder="Company Name"
      />

      <Text style={styles.label}>Category:</Text>
      <TextInput
        style={styles.input}
        value={category}
        onChangeText={setCategory}
        placeholder="Product Category"
      />

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Product Description"
      />

      <Text style={styles.label}>Stock Quantity:</Text>
      <TextInput
        style={styles.input}
        value={stockQuantity}
        onChangeText={setStockQuantity}
        placeholder="Stock Quantity"
      />
      <Button style={styles.button} onPress={addQuantity}>Add more Quantity</Button>

      <Text style={styles.label}>MRP:</Text>
      <TextInput
        style={styles.input}
        value={mrp}
        onChangeText={setMRP}
        placeholder="Maximum Retail Price"
      />

      <Text style={styles.label}>Discounted Price:</Text>
      <TextInput
        style={styles.input}
        value={discountedPrice}
        onChangeText={setDiscountedPrice}
        placeholder="Discounted Price"
      />

      <Text style={styles.label}>Availability Status:</Text>
      <TextInput
        style={styles.input}
        value={availabilityStatus}
        onChangeText={setAvailabilityStatus}
        placeholder="Availability Status"
      />

      <Button style={styles.submit} onPress={updateProduct}>Update Product</Button>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight:'bold'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button:{
      marginBottom: 20,
      backgroundColor: theme.primaryColor
  },
  submit:{
    backgroundColor: theme.primaryColor,
    marginBottom: 50
  }
});

export default () => {
    return (
      <NativeBaseProvider>
        <UpdateProductForm />
      </NativeBaseProvider>
    );
  };
  