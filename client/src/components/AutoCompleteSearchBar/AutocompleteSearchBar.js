import React, {useState} from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { Input, List, Text, Image } from 'native-base'
import { useNavigation, useRoute } from '@react-navigation/native';
import * as api from 'client/src/utils/api.js';


const AutocompleteSearchBar = () => {
    const navigation = useNavigation();

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [product, setProduct] = useState();
  
    const handleSearch = async (searchTerm) => {
      setSearchTerm(searchTerm);

      try{
        const response = await api.searchProducts(searchTerm);
        // console.log(response.data)
        setSearchResults(response.data);
      }
      catch(error){
        console.log(error);
      }
    };

    const gotoProductDetails = async (title) => {
      console.log('gotoProductDetails')

      const response = await api.getProductByTitle(title);
      const productData = response.data;

      setProduct(productData); 
      console.log(product);

      // const product = response.data;
      navigation.navigate('Product Details', {product: productData});
    }
    
    return (
        <>
         {/* Search Input */}
      <Input
        size="sm"
        placeholder="Search for the product"
        onChangeText={handleSearch}
        value={searchTerm}
        variant="rounded"        
        InputLeftElement={
          <Image source= {require('client/assets/icons/search-icon.png')} style={styles.searchIcon}/>
        }
      />

      {/* Autocomplete Suggestions */}
      {searchResults.length > 0 && (
        <List>
          {searchResults.map((item, index) => (
            <TouchableOpacity key={index}
              onPress={() => gotoProductDetails(item.title)}
              style={{
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#ddd',
              }}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </List>
      )}
        </>
    );
}

export default AutocompleteSearchBar;


const styles = StyleSheet.create({
  searchIcon:{
    marginLeft: 6
  }
});

// searchResults
// [{"title": "Omez 365"}, {"title": "omez"}]