import {StyleSheet} from 'react-native';
import { theme } from "client/src/utils/theme.js";

export default styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 8, 
        backgroundColor:'white'
    },
    productDescTitle: {
        fontWeight:'bold', 
        color: 'black', 
        fontSize: 15, 
        padding: 10
    },
    descriptionText:{
        color:'grey', 
        fontSize: 12, 
        paddingHorizontal: 10
    }
    
    
});