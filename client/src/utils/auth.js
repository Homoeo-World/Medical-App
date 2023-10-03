import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to store the combined data (token and cart)
export const storeAuthAndCartData = async (authToken, cartData) => {
  try {
    const combinedData = {
      authToken: authToken,
      cart: cartData,
    };
    const combinedDataJson = JSON.stringify(combinedData);
    await AsyncStorage.setItem('authAndCartData', combinedDataJson);
    return combinedData;
    
  } catch (error) {
    console.error('Error storing auth and cart data:', error);
  }
};

// Function to retrieve the combined data and parse it
export const getAuthAndCartData = async () => {
  try {
    const combinedDataJson = await AsyncStorage.getItem('authAndCartData');
    if (combinedDataJson) {
      const combinedData = JSON.parse(combinedDataJson);
      return combinedData;
    } else {
      return null; // No data found in AsyncStorage
    }
  } catch (error) {
    console.error('Error retrieving auth and cart data:', error);
    return null;
  }
};

export const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
    console.log('All data in AsyncStorage cleared');
  } catch (error) {
    console.error('Error clearing AsyncStorage:', error);
  }
}
