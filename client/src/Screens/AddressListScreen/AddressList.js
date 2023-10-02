import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Modal, TouchableOpacity } from 'react-native';
import {Button, NativeBaseProvider} from 'native-base';
import { Radio, Divider } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import AddressFormModal from '../../components/AddressForm/AddressFormModal';

function AddressList() {
  const navigation = useNavigation();

  const addresses = ['Sky Home PG, Narayan Nagar, Hinjewadi Phase 1, Pune, Maharashtra - 411057', 
                    'New Vishal PG, Narayan Nagar, Hinjewadi Phase 1, Pune, Maharashtra - 411057'];
         

  const [selectedAddress, setSelectedAddress] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleSaveAddress = (details) => {
    // setAddressDetails(details);
    toggleModal(); // Close the modal after saving
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
        <View key={index} style={styles.address}>
          <Radio.Group
            name="addressRadioGroup"
            value={selectedAddress}
            onChange={() => handleAddressSelection(address)}
          >
            <Radio value={address} style={styles.radio} size="sm">
              <Text style={styles.addressText}>{address}</Text>
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
        backgroundColor: '#F7F7F7',
    },
    addressContainer: {
      flexDirection: 'column', // Change to column to ensure proper stacking
      backgroundColor: 'white',
    },
    button:{
        marginBottom: 20
    },
    address: {
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 5,
      marginBottom: 10,
      overflow: 'hidden', // Hide overflow to prevent text from being cut
    },
    radio: {
      flexDirection: 'row', // Use row to align radio button and text horizontally
      alignItems: 'center',
      justifyContent: 'flex-start', // Align items to the start
      padding: 10, // Add padding to radio to separate from text
    },
    addressText: {
      fontSize: 12, // Adjust the font size as needed
      flex: 1, // Allow text to wrap to the next line if necessary
    },
    checkoutButton: {
        backgroundColor: 'blue',
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
  