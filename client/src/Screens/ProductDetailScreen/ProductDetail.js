import React, {useState} from 'react';
import { View, ScrollView, Text } from 'react-native';
import {NativeBaseProvider} from 'native-base';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import Footer from '../../components/Footer/Footer';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';


function ProductDetail(){
  console.log('productDetails')

  const route = useRoute();
  const { product } = route.params;

  console.log(route.params);
  console.log('product.....');console.log(product);

  // product = { id: 1, title: 'Lecope 5mg 10 Tablets', company: 'Mankind Pharma Private Ltd', quantity:'10pc', image: 'image_url', price: '₹ 19.39', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.' };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        <SingleProduct product={product}/>

        <Text style={styles.productDescTitle}>Product Description</Text>

        <View style={{marginBottom: 20}}>
            <Text style={styles.descriptionText}>{product.description}</Text>
            <Text></Text>
            <Text style={styles.descriptionText}>{product.description}</Text>
            <Text></Text>
            <Text style={styles.descriptionText}>{product.description}</Text>
            <Text></Text>
            <Text style={styles.descriptionText}>{product.description}</Text>
        </View>

    </ScrollView>
  );
};


export default () => {
  return (
    <NativeBaseProvider>
     
        <ProductDetail/>
        <Footer/>
      
    </NativeBaseProvider>
  )
}

