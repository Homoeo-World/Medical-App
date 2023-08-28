import React, {useState} from 'react';
import { View, FlatList, TextInput } from 'react-native';
import {NativeBaseProvider} from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import ProductCard from 'client/src/components/ProductCard/ProductCard';

const products = [
  // Array of product objects
  { id: 1, title: 'Product 1', company: 'Company A', quantity:'10pc', image: 'image_url', price: '₹ 19' },
  { id: 2, title: 'Product 2', company: 'Company B', quantity:'10pc', image: 'image_url', price: '₹ 29' },
  { id: 3, title: 'Product 1', company: 'Company A', quantity:'10pc', image: 'image_url', price: '₹ 19' },
  { id: 4, title: 'Product 2', company: 'Company B', quantity:'10pc', image: 'image_url', price: '₹ 29' },
  { id: 5, title: 'Product 1', company: 'Company A', quantity:'10pc', image: 'image_url', price: '₹ 19' },
  { id: 6, title: 'Product 2', company: 'Company B', quantity:'10pc', image: 'image_url', price: '₹ 29' },
  { id: 7, title: 'Product 1', company: 'Company A', quantity:'10pc', image: 'image_url', price: '₹ 19' },
  { id: 8, title: 'Product 2', company: 'Company B', quantity:'10pc', image: 'image_url', price: '₹ 29' },
  { id: 9, title: 'Product 1', company: 'Company A', quantity:'10pc', image: 'image_url', price: '₹ 19' },
  { id: 10, title: 'Product 2', company: 'Company B', quantity:'10pc', image: 'image_url', price: '₹ 29' },
  { id: 11, title: 'Product 1', company: 'Company A', quantity:'10pc', image: 'image_url', price: '₹ 19' },
  { id: 12, title: 'Product 2', company: 'Company B', quantity:'10pc', image: 'image_url', price: '₹ 29' },
];

function ProductList(){
  const [searchQuery, setSearchQuery] = useState('');

  // const filteredProducts = products.filter(product => {
  //   return product.title.toLowerCase().includes(searchQuery.toLowerCase());
  // });

  return (
    <View style={{ flex: 1, padding: 8, backgroundColor:'white'}}>

      {/*search-bar component */}
      <TextInput
        placeholder="Search for product"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        style={{
          backgroundColor: '#f5f5f5',
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
          borderColor:'red',
          borderWidth: 0.4,
        }}
      >
        </TextInput>

      <FlatList
        data={products}
        numColumns={2} // Display two cards side by side
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ProductCard product={item}
        />}
      />
      {/* <Text>inside  productList component...</Text> */}
    </View>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
     
        <ProductList />
      
    </NativeBaseProvider>
  )
}

// export default ProductList;
