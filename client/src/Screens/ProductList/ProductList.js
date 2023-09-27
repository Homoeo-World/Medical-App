import React, {useEffect, useState} from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import {NativeBaseProvider, Icon, Text} from 'native-base';
import { FontAwesaome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import ProductCard from 'client/src/components/ProductCard/ProductCard';
import AutocompleteSearchBar from 'client/src/components/AutoCompleteSearchBar/AutocompleteSearchBar.js';
import * as api from 'client/src/utils/apis/api.js';
import axios from 'axios'

function ProductList(){
  
  const navigation = useNavigation();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(true);

  const pageSize = 10;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.getAllproducts(); // console.log(response.data)
        // setProducts(response.data);

        // paginated response
        if(response.data.length !== 0){
          setProducts((prevProducts) => [...prevProducts, ...response.data]);
        }
        setLoading(false); 
        setLoadingMore(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
        setLoadingMore(false); 
      }
      
    }

    fetchData();
    console.log(products)
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
    setLoadingMore(true);
  }



  return (
    <View style={{ flex: 1, padding: 8, backgroundColor: 'white'}}>

      <AutocompleteSearchBar/>   
        <FlatList
          data={products}
          numColumns={2}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ProductCard product={item} />}
          onEndReachedThreshold={0.1}
          onEndReached={loadMore}
        />
       {loadingMore && (<ActivityIndicator size="small" color="blue"  />)}
    </View>
  );
};

// ProductList.navigationOptions = {
//   title: 'Medicines',
//   headerRight: () => (
//     <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
//       <Text>cart</Text>
//       {/* <Icon as={FontAwesome5} name="shopping-cart" size={24} color="blue" /> */}
//     </TouchableOpacity>
//   ),
// };

export default () => {
  return (
    <NativeBaseProvider>
    
        <ProductList />
      
    </NativeBaseProvider>
  )
}

// export default ProductList;



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
