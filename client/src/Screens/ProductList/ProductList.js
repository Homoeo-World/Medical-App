import React, {useEffect, useState} from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
// import {NativeBaseProvider, Icon, Text, Spinner, Button, Content, Container} from 'native-base';
import { NativeBaseProvider, Box, Text, Spinner, Heading, VStack, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable } from 'native-base';

import { FontAwesaome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native';
import ProductCard from 'client/src/components/ProductCard/ProductCard';
import AutocompleteSearchBar from 'client/src/components/AutoCompleteSearchBar/AutocompleteSearchBar.js';
import Footer from '../../components/Footer/Footer';
import * as api from 'client/src/utils/api.js';
import * as auth from 'client/src/utils/auth.js' 
import {theme} from 'client/src/utils/theme.js';



function ProductList(){  
  const [selected, setSelected] = React.useState(1);

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [_cartItems, setCartItems] = useState([]);
  const [loadingMore, setLoadingMore] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const pageSize = 10;

  // useEffect(() => {
  //   async function fetchCartData() {
  //     console.log('fetchCartData...')
  //     const response = await auth.getAuthAndCartData();
  //     if(response && response.cart){
  //       setCartItems(response.cart);
  //       console.log('product list cartItems: ', _cartItems);
  //     }
  //   }
  //     fetchCartData();
  // },[isFocused])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.getProducts(page, pageSize); 

        // paginated response
        if(response.data.length !== 0){
          setProducts((prevProducts) => [...prevProducts, ...response.data]);
        }
        else{
          setHasMore(false);
        }
        // setLoading(false); 
        setLoadingMore(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // setLoading(false);
        setLoadingMore(false); 
      }
      
    }

    if(hasMore){
      fetchData();
    }
    
    // console.log(products)
  }, [page, hasMore]);


  const loadMore = () => {
    setLoadingMore(true);
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <View style={{ flex: 1, padding: 0, backgroundColor: 'white'}}>
      
      <AutocompleteSearchBar/> 
      
        <FlatList
          data={products}
          numColumns={2}
          keyExtractor={(item) => item.title}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ProductCard product={item}/>}
          onEndReachedThreshold={0.1}
          onEndReached={loadMore}
        />
       {loadingMore && hasMore && (<Spinner size="small" color={theme.primaryColor}  />)}
       
    </View>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
    
        <ProductList />
        <Footer/>
      
    </NativeBaseProvider>
  )
}


// const products = [
//   // Array of product objects
//   { title: 'Lecope 5mg 10 Tablets', company: 'Mankind Pharma Private Ltd.', quantity:'10pc', image: 'image_url', price: '₹ 19.39', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.' },
//   { title: 'Rabvid DSR ', company: 'Dabur', quantity:'10pc', image: 'image_url', price: '₹ 19', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.'  },
//   { title: 'Cefaxone 500mg Injection Vial', company: 'Abott pvt. lmt', quantity:'10pc', image: 'image_url', price: '₹ 29', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.'  },
//   { title: 'omez 356 ', company: 'Mankind Pharma Private Ltd', quantity:'10pc', image: 'image_url', price: '₹ 19', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.'  },
//   { title: 'Moxikind CV 625', company: 'Jolly Healthcare', quantity:'10pc', image: 'image_url', price: '₹ 29', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.'  },
//   { title: 'Chymokem Forte', company: 'Mankind Pharma Private Ltd', quantity:'10pc', image: 'image_url', price: '₹ 19', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.'  },
//   { title: 'Limcee', company: 'IPCA Laboratories', quantity:'10pc', image: 'image_url', price: '₹ 29', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.'  },
//   { title: 'DyloKing-SP', company: 'Micor Gratia', quantity:'10pc', image: 'image_url', price: '₹ 19', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.'  },
//   { title: 'oxymoron', company: 'Company B', quantity:'10pc', image: 'image_url', price: '₹ 29', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.'  },
//   { title: 'Aspirin', company: 'Absolute Pharma', quantity:'10pc', image: 'image_url', price: '₹ 19', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.'  },
//   {  title: 'Epilisi', company: 'Oaknet Life Sciences', quantity:'10pc', image: 'image_url', price: '₹ 29', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.'  },
//   {  title: 'Crocin', company: 'Aristo Pharmaceuticals PVT LTD', quantity:'10pc', image: 'image_url', price: '₹ 19', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.'  },
//   {  title: 'Betadine', company: 'Torrento Pharmaceuticals', quantity:'10pc', image: 'image_url', price: '₹ 29', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.'  },
// ];
