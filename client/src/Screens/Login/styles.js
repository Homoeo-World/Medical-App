import { StyleSheet } from "react-native";
import { theme } from "client/src/utils/theme.js";

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f7f7f7",
    },
    LoginText: {
      marginTop: 20,
      fontSize: 20,
      color: "grey",
      // fontWeight:'bold',
    },
    WelcomeText: {
      // marginTop:100,
      fontSize: 30,
      fontWeight: "1000",
    },
    Middle: {
      alignItems: "center",
      justifyContent: "center",
    },
    text2: {
      flexDirection: "row",
      justifyContent: "center",
      paddingTop: 5,
      marginTop: 60,
    },
    signupText: {
      fontWeight: "bold",
      color: theme.primaryColor,
    },
    emailField: {
      marginTop: 30,
      marginLeft: 15,
    },
    emailInput: {
      marginTop: 10,
      marginRight: 5,
    },
    buttonStyle: {
      marginTop: 30,
      marginLeft: 15,
      marginRight: 15,
    },
    buttonStyleX: {
      marginTop: 12,
      marginLeft: 15,
      marginRight: 15,
    },
    buttonDesign: {
      backgroundColor: theme.primaryColor, 
      borderRadius: 20
    },
    buttonDisabledDesign: {
      opacity: 0.5,
    },
    lineStyle: {
      flexDirection: "row",
      marginTop: 30,
      marginLeft: 15,
      marginRight: 15,
      alignItems: "center",
      justifyContent: "center",
    },
    imageStyle: {
      width: 80,
      height: 80,
      marginLeft: 20,
    },
    boxStyle: {
      flexDirection: "row",
      marginTop: 30,
      marginLeft: 15,
      marginRight: 15,
      justifyContent: "space-around",
    },
    inputFieldText: {
      marginBottom: 5,
      color: "grey",
      fontWeight: "bold",
      fontSize: 10,
    },
    logo: {
      height: 40,
      width: 32,
      marginRight: 5,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 100,
    },
    personIcon: {
      height: 16,
      width: 16,
      marginLeft: 10,
    },
    orText: {
      width: 50,
      textAlign: "center",
      color: "grey",
    },
    loginBox:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: "100%",
      },
    googleLogo:{ 
      width: 40, 
      height: 40, 
      marginRight: 10 
    }
    
  });