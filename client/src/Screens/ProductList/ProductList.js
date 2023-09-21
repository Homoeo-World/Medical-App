import React, {useState} from 'react';
import { View, FlatList } from 'react-native';
import {NativeBaseProvider} from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import ProductCard from 'client/src/components/ProductCard/ProductCard';
import AutocompleteSearchBar from 'client/src/components/AutoCompleteSearchBar/AutocompleteSearchBar.js';

const products = [
  // Array of product objects
  { id: 0, title: 'Lecope 5mg 10 Tablets', company: 'Mankind Pharma Private Ltd', quantity:'10pc', image: 'image_url', price: '₹ 19.39', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.' },
  { id: 1, title: 'Product 1 ', company: 'Company A', quantity:'10pc', image: 'image_url', price: '₹ 19', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.'  },
  { id: 2, title: 'Product 2', company: 'Company B', quantity:'10pc', image: 'image_url', price: '₹ 29', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.'  },
  { id: 3, title: 'Product 1 omez 356 oxymorom', company: 'Company A', quantity:'10pc', image: 'image_url', price: '₹ 19', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.'  },
  { id: 4, title: 'Product 2', company: 'Company B', quantity:'10pc', image: 'image_url', price: '₹ 29', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.'  },
  { id: 5, title: 'Product 1', company: 'Company A', quantity:'10pc', image: 'image_url', price: '₹ 19', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.'  },
  { id: 6, title: 'Product 2', company: 'Company B', quantity:'10pc', image: 'image_url', price: '₹ 29', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.'  },
  { id: 7, title: 'Product 1', company: 'Company A', quantity:'10pc', image: 'image_url', price: '₹ 19', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.'  },
  { id: 8, title: 'Product 2', company: 'Company B', quantity:'10pc', image: 'image_url', price: '₹ 29', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.'  },
  { id: 9, title: 'Product 1', company: 'Company A', quantity:'10pc', image: 'image_url', price: '₹ 19', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.'  },
  { id: 10, title: 'Product 2', company: 'Company B', quantity:'10pc', image: 'image_url', price: '₹ 29', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.'  },
  { id: 11, title: 'Product 1', company: 'Company A', quantity:'10pc', image: 'image_url', price: '₹ 19', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.'  },
  { id: 12, title: 'Product 2', company: 'Company B', quantity:'10pc', image: 'image_url', price: '₹ 29', description: 'In the PRINCE2 project management method, a product description is a structured format that presents information about a project product. It is a management product, usually created by the project manager during the process of initiating a project in the initial stage of the PRINCE2 project management method.'  },
];

function ProductList(){

  return (
    <View style={{ flex: 1, padding: 8, backgroundColor:'white'}}>

      <AutocompleteSearchBar/>
     
      <FlatList
        data={products}
        numColumns={2} // Display two cards side by side
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ProductCard product={item}
        />}
      />
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
