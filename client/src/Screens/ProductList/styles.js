import {StyleSheet} from 'react-native';
import { theme } from "client/src/utils/theme.js";
import { marginBottom } from 'styled-system';

export default styles = StyleSheet.create({
    container:{ 
        flex: 1, 
        padding: 0, 
        backgroundColor: 'white',
        marginBottom: 60
    },
    spinnerContainer:{
        backgroundColor: 'white'
    },
    // flatlistContainer:{
    //     marginBottom: 50
    // }
})