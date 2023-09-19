import React, {useState} from 'react';
import { View, ScrollView, Text } from 'react-native';
import {NativeBaseProvider} from 'native-base';
import SingleProduct from '../../components/SingleProduct/SingleProduct';


function ProductDetail(){

    const product = { id: 1, title: 'Lecope 5mg 10 Tablets', company: 'Mankind Pharma Private Ltd', quantity:'10pc', image: 'image_url', price: '₹ 19.39' };

  return (
    <ScrollView style={{ flex: 1, padding: 8, backgroundColor:'white'}}>
        <SingleProduct product={product}/>
        <Text style={{fontWeight:'bold', color: 'black', fontSize: 15, padding: 10}}>Product Description</Text>
        <Text style={{color:'grey', fontSize: 12, paddingHorizontal: 10}}>
            In the PRINCE2 project management method, a product description is a structured format that presents information about 
            a project product. It is a management product, usually created by the project manager during the process of initiating a 
            project in the initial stage of the PRINCE2 project management method.

            In the PRINCE2 project management method, a product description is a structured format that presents information about 
            a project product. It is a management product, usually created by the project manager during the process of initiating a 
            project in the initial stage of the PRINCE2 project management method.

            In the PRINCE2 project management method, a product description is a structured format that presents information about 
            a project product. It is a management product, usually created by the project manager during the process of initiating a 
            project in the initial stage of the PRINCE2 project management method.

            In the PRINCE2 project management method, a product description is a structured format that presents information about 
            a project product. It is a management product, usually created by the project manager during the process of initiating a 
            project in the initial stage of the PRINCE2 project management method
        </Text>
        <Text style={{color:'grey', fontSize: 12, paddingHorizontal: 10}}>
            In the PRINCE2 project management method, a product description is a structured format that presents information about 
            a project product. It is a management product, usually created by the project manager during the process of initiating a 
            project in the initial stage of the PRINCE2 project management method.

            In the PRINCE2 project management method, a product description is a structured format that presents information about 
            a project product. It is a management product, usually created by the project manager during the process of initiating a 
            project in the initial stage of the PRINCE2 project management method.

            In the PRINCE2 project management method, a product description is a structured format that presents information about 
            a project product. It is a management product, usually created by the project manager during the process of initiating a 
            project in the initial stage of the PRINCE2 project management method.

            In the PRINCE2 project management method, a product description is a structured format that presents information about 
            a project product. It is a management product, usually created by the project manager during the process of initiating a 
            project in the initial stage of the PRINCE2 project management method
        </Text>
        <Text style={{color:'grey', fontSize: 12, paddingHorizontal: 10}}>
            In the PRINCE2 project management method, a product description is a structured format that presents information about 
            a project product. It is a management product, usually created by the project manager during the process of initiating a 
            project in the initial stage of the PRINCE2 project management method.

            In the PRINCE2 project management method, a product description is a structured format that presents information about 
            a project product. It is a management product, usually created by the project manager during the process of initiating a 
            project in the initial stage of the PRINCE2 project management method.

            In the PRINCE2 project management method, a product description is a structured format that presents information about 
            a project product. It is a management product, usually created by the project manager during the process of initiating a 
            project in the initial stage of the PRINCE2 project management method.

            In the PRINCE2 project management method, a product description is a structured format that presents information about 
            a project product. It is a management product, usually created by the project manager during the process of initiating a 
            project in the initial stage of the PRINCE2 project management method
        </Text>
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

