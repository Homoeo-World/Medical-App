import React, {useState} from 'react';
import { View, ScrollView, Text } from 'react-native';
import {NativeBaseProvider} from 'native-base';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import { useNavigation, useRoute } from '@react-navigation/native';


function ProductDetail(){
  console.log('productDetails')

  const route = useRoute();
  const { product } = route.params;

  console.log(route.params);
  console.log('product.....');console.log(product);

  // product = { id: 1, title: 'Lecope 5mg 10 Tablets', company: 'Mankind Pharma Private Ltd', quantity:'10pc', image: 'image_url', price: '₹ 19.39', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.' };

  return (
    <ScrollView style={{ flex: 1, padding: 8, backgroundColor:'white'}} showsVerticalScrollIndicator={false}>

        <SingleProduct product={product}/>

        <Text style={{fontWeight:'bold', color: 'black', fontSize: 15, padding: 10}}>Product Description</Text>

        <View style={{marginBottom: 20}}>
            <Text style={{color:'grey', fontSize: 12, paddingHorizontal: 10}}>{product.description}</Text>
            <Text></Text>
            <Text style={{color:'grey', fontSize: 12, paddingHorizontal: 10}}>{product.description}</Text>
            <Text></Text>
            <Text style={{color:'grey', fontSize: 12, paddingHorizontal: 10}}>{product.description}</Text>
            <Text></Text>
            <Text style={{color:'grey', fontSize: 12, paddingHorizontal: 10}}>{product.description}</Text>
        </View>

    </ScrollView>
  );
};


export default () => {
  return (
    <NativeBaseProvider>
     
        <ProductDetail/>
      
    </NativeBaseProvider>
  )
}

