import React, { useState } from 'react';
import { ScrollView, View, TextInput, Alert, StyleSheet } from 'react-native';
import { NativeBaseProvider, Button, Text } from "native-base";
import { theme } from "client/src/utils/theme.js";
import styles from "./styles";

const AddNewProduct = () => {
  const [productTitle, setProductTitle] = useState('');
  const [productCompany, setProductCompany] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productStockQuantity, setProductStockQuantity] = useState(0);
  const [productMRP, setProductMRP] = useState('');
  const [productDiscountedPrice, setProductDiscountedPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productAvailabilityStatus, setProductAvailabilityStatus] = useState(''); //dropdown ['available', 'out of stock']
  // const [productImages, setProductImages] = useState([]); // urls for images on gcp


  const handleAddProduct = () => {
    if (!productTitle || !productDescription || !productDiscountedPrice) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    const productData = {
      title: productTitle,
      description: productDescription,
      price: parseFloat(productDiscountedPrice),
    };

    // Make a network request to your backend to add the product

    // Reset the form
    setProductTitle('');
    setProductDescription('');
    setProductDiscountedPrice('');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <Text style={styles.label}>Title</Text>
      <TextInput
        value={productTitle}
        onChangeText={setProductTitle}
        style={styles.input}
        placeholder="Enter name"
      />

      <Text style={styles.label}>Company</Text>
      <TextInput
        value={productCompany}
        onChangeText={setProductCompany}
        style={styles.input}
        placeholder="Enter Company"
      />

    <Text style={styles.label}>Category</Text>
      <TextInput
        value={productCategory}
        onChangeText={setProductCategory}
        style={styles.input}
        placeholder="Enter Category"
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        value={productDescription}
        onChangeText={setProductDescription}
        style={[styles.input, styles.multilineInput]}
        placeholder="Enter description"
        multiline={true}
        numberOfLines={4}
      />

      <Text style={styles.label}>Stock Quantity</Text>
      <TextInput
        value={productStockQuantity}
        onChangeText={setProductStockQuantity}
        style={styles.input}
        placeholder="Enter stock quantity"
      />

      <Text style={styles.label}>MRP</Text>
      <TextInput
        value={productMRP}
        onChangeText={setProductMRP}
        style={styles.input}
        placeholder="Enter MRP"
        
      />

      <Text style={styles.label}>Discounted Price</Text>
      <TextInput
        value={productDiscountedPrice}
        onChangeText={setProductDiscountedPrice}
        style={styles.input}
        placeholder="Enter price"
        
      />

    <Text style={styles.label}>Availability Status</Text>
      <TextInput
        value={productAvailabilityStatus}
        onChangeText={setProductAvailabilityStatus}
        style={styles.input}
        placeholder="Enter availability status"
      />

      <Button style={styles.submit} onPress={handleAddProduct}>Add Product</Button>
    </ScrollView>
  );
};

export default () => {
    return (
      <NativeBaseProvider>
        <AddNewProduct />
      </NativeBaseProvider>
    );
  };



