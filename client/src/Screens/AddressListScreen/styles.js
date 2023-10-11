import { StyleSheet } from "react-native";
import { theme } from "client/src/utils/theme.js";

export default styles = StyleSheet.create({
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
      color: theme.primaryColor
    },
    addressText: {
      fontSize: 12, 
      flex: 1, 
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