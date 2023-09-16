import React, {useState} from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { Input, List, Text } from 'native-base'


const AutocompleteSearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = async (searchTerm) => {
      setSearchTerm(searchTerm);

      try{
        // const searchResults = api call

        // setSearchResults(searchResults);
      }
      catch(error){

      }

      setSearchResults(['apple', 'banana', 'cherry']);
    };
    
    return (
        <>
         {/* Search Input */}
      <Input
        placeholder="Search for the product"
        onChangeText={handleSearch}
        value={searchTerm}
      />

      {/* Autocomplete Suggestions */}
      {searchResults.length > 0 && (
        <List>
          {searchResults.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => alert(`Selected: ${item}`)}
              style={{
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#ddd',
              }}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </List>
      )}
        </>
    );
}

export default AutocompleteSearchBar;