import {StyleSheet} from 'react-native';
import { theme } from "client/src/utils/theme.js";

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    SignupText: {
      marginTop:100,
      fontSize:30,
      fontWeight:'bold',
    },
    LoginText:{
      marginTop:20,
      fontSize:20,
      color: 'grey',
    },
    Middle:{
      alignItems:'center',
      justifyContent:'center',
    },
    text2:{
      flexDirection:'row',
      justifyContent:'center',
      paddingTop:5,
      marginTop:50,
    },
    loginText:{
      fontWeight:'bold',
      color:theme.primaryColor
    },
    emailField:{
      marginTop:30,
      marginLeft:15
    },
    emailInput:{
      marginTop:10,
      marginRight:5
    },
    buttonStyle:{
      marginTop:30,
      marginLeft:15,
      marginRight:15
    },
    buttonStyleX:{
      marginTop:12,
      marginLeft:15,
      marginRight:15
    },
    buttonDesign:{
      backgroundColor:theme.primaryColor,
      borderRadius: 20
    },
    lineStyle:{
      flexDirection:'row',
      marginTop:30,
      marginLeft:15,
      marginRight:15,
      alignItems:'center',
      justifyContent:'center'
    },
    imageStyle:{
      width:80,
      height:80,
      marginLeft:20,
    },
    boxStyle:{
      flexDirection:'row',
      marginTop:30,
      marginLeft:15,
      marginRight:15,
      justifyContent:'space-around'
    },
    inputFieldText:{
      marginBottom: 5,
      color: 'grey',
      fontWeight:'bold',
      fontSize: 10
    }
  });