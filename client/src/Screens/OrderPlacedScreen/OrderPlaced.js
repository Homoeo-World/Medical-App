import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {NativeBaseProvider} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import {theme} from 'client/src/utils/theme.js';
const orderPlacedImg = require('client/assets/approval-256.png');

function OrderPlaced(){

    const navigation = useNavigation();

    const handleDonePress = () => {
        console.log('handleDonePress...');
        navigation.navigate('ProductList');
    }

    return (
        <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={orderPlacedImg} 
          style={styles.image}
        />
        <Text style={{ fontSize: 20 }}>Order Placed</Text>
        {/* Add your existing content here */}
      </View>

      {/* Footer with the "Done" button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.doneButton} onPress={() => handleDonePress()}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: theme.primaryColor
      },
      content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: 150,
        height: 150,
      },
      footer: {
        backgroundColor: 'blue', 
        paddingHorizontal: 20,
        paddingVertical: 5,
      },
      doneButton: {
        // backgroundColor: 'green', 
        paddingVertical: 5,
        alignItems: 'center',
        borderRadius: 10,
        // borderWidth:1,
        // borderColor:'white'
      },
      doneButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },    
});

export default () => {
    return (
      <NativeBaseProvider>
      
          <OrderPlaced />
        
      </NativeBaseProvider>
    )
  }