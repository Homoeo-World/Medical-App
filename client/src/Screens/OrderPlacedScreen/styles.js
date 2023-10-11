import {StyleSheet} from 'react-native';
import { theme } from "client/src/utils/theme.js";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#7dd3fc'
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
        backgroundColor: theme.primaryColor, 
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
      orderPlacedText:{
          fontSize: 20, 
          color:'white' 
      }   
});