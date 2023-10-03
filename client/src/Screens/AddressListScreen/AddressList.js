import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Modal, TouchableOpacity, AppRegistry } from 'react-native';
import {Button, NativeBaseProvider} from 'native-base';
import { Radio, Divider } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import AddressFormModal from '../../components/AddressForm/AddressFormModal';
import * as api from 'client/src/utils/api.js';
import {theme} from 'client/src/utils/theme.js' ;

function AddressList() {
  const navigation = useNavigation();

  // const addresses = ['Sky Home PG, Narayan Nagar, Hinjewadi Phase 1, Pune, Maharashtra - 411057', 
  //                   'New Vishal PG, Narayan Nagar, Hinjewadi Phase 1, Pune, Maharashtra - 411057'];
         
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function fetchData(){
      console.log('fetchData...');
      try{
        const _addresses = await api.getAddressesbyUser();
        setAddresses(_addresses);
      }
      catch(error){
        console.log("Error while fetching addresses: ", error);
      }
    }
    fetchData();
  },[])

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleSaveAddress = async (addressObject) => {
    console.log('details: ', addressObject);
    const addressString = [
      addressObject.addressLine1,
      addressObject.addressLine2,
      addressObject.city,
      addressObject.state,
      addressObject.pincode,
    ]
      .filter((field) => field !== null && field !== undefined && field !== '')
      .join(', ');
    
    console.log('addressString: ', addressString);
    const address = addressString;

    //api call to save the address for the current user
    const response = api.postNewAddress(address);

    setAddresses((prevAdresess) =>  [...prevAdresess, address]);
    setSelectedAddress(address);
    
    toggleModal();
  };


  const handleAddressSelection = (address) => {
    setSelectedAddress(address);
    console.log('address', address);
  };

  const onPlaceOrderPress = () => {
    console.log('onPlaceOrderPress...');
    navigation.navigate('Cart',{selectedAddress})
  }

  return (
   <View style={styles.container}>
    <ScrollView style={styles.addressContainer}>
      <Button onPress={toggleModal} style={styles.button}>+ Add new address</Button>
      {addresses.map((address, index) => (
        <View key={index} style={[styles.address, selectedAddress===address && styles.selectedAddress]}>
          <Radio.Group
            name="addressRadioGroup"
            value={selectedAddress}
            onChange={() => handleAddressSelection(address)}
          >
            <Radio value={address} style={styles.radio} size="sm" colorScheme='black'>
              <Text style={[styles.addressText, selectedAddress===address && styles.selectedAddressText ]}>{address}</Text>
            </Radio>
          </Radio.Group>
        </View>
      ))}
    </ScrollView>
        <TouchableOpacity 
          onPress={onPlaceOrderPress} 
          disabled={selectedAddress === ''} 
          style={[styles.checkoutButton, selectedAddress === '' && styles.disabledButton, ]}>
            <Text style={styles.checkoutButtonText}>Place Order</Text>
        </TouchableOpacity>

        <AddressFormModal isVisible={isModalVisible} onSave={handleSaveAddress} onClose={toggleModal} />
   </View>
  );
};


export default () => {
    return (
      <NativeBaseProvider>
       
          <AddressList />
        
      </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
    },
    addressContainer: {
      flexDirection: 'column', // Change to column to ensure proper stacking
      backgroundColor: 'white',
    },
    button:{
        marginBottom: 20,
        backgroundColor: theme.primaryColor
    },
    address: {
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 5,
      marginBottom: 10,
      overflow: 'hidden', // Hide overflow to prevent text from being cut
    },
    selectedAddress:{
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.primaryColor,
      borderRadius: 5,
      marginBottom: 10,
      overflow: 'hidden', //
    },
    radio: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start', 
      padding: 10, 
      // color: theme.primaryColor
    },
    addressText: {
      fontSize: 12, // Adjust the font size as needed
      flex: 1, // Allow text to wrap to the next line if necessary
    },
    selectedAddressText:{
      fontSize: 12, 
      flex: 1, 
      color: theme.primaryColor,
      fontWeight:'bold'
    },
    checkoutButton: {
        backgroundColor: theme.primaryColor,
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
      },
      checkoutButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
      },
      disabledButton: {
        opacity: 0.5,
      }
  });
  