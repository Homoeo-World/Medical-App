import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.footerButtonText}>Button 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.footerButtonText}>Button 2</Text>
      </TouchableOpacity>
      {/* Add more footer content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row', // Horizontal layout
    justifyContent: 'space-around', // Space evenly between items
    alignItems: 'center', // Vertically center items
    backgroundColor: 'lightgray', // Footer background color
    paddingVertical: 10, // Adjust as needed
  },
  footerButton: {
    backgroundColor: 'blue', // Button background color
    paddingVertical: 5,
    // paddingHorizontal: 10,
    borderRadius: 5,
  },
  footerButtonText: {
    color: 'white', // Button text color
    fontWeight: 'bold',
  },
});

export default Footer;
