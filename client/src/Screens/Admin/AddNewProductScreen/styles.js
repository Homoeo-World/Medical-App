import { StyleSheet } from "react-native";
import { theme } from "client/src/utils/theme.js";

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: 'white',
    },
    label: {
      fontSize: 16,
      marginBottom: 8,
      fontWeight:'bold'
    },
    input: {
      fontSize: 12,
      backgroundColor: '#f0f0f0',
      padding: 8,
      marginBottom: 30,
      borderRadius: 4,
    },
    multilineInput: {
      height: 100,
      textAlignVertical: 'top',
    },
    submit:{
      backgroundColor: theme.primaryColor,
      marginBottom: 50
    }
  });