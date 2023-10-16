import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, HStack, Spinner, AspectRatio } from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { alignContent, flex, flexDirection, marginBottom, marginTop, width } from 'styled-system';
import * as api from 'client/src/utils/api.js';
import {theme} from 'client/src/utils/theme.js';
import styles from './styles';


function Signup() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [canRegister, setCanRegister] = useState(true);
  const [isSigningUp, setIsSigningUp] = useState(false);

  function checkDisable(){
    return email.length<=0 || password.length<=0 || confirmPassword.length<=0 || !passwordsMatch
  }
  const disable = checkDisable();


  const handleEmailInputChange = (value) => {
    setEmail(value);
    console.log(email);
  }

  const handlePasswordInputChange = (value) => {
    setPassword(value)
    console.log(password);
  }

  const handleConfirmPasswordInputChange = (value) => {
    setConfirmPassword(value)
    setPasswordsMatch(value === password);
    console.log(confirmPassword);
  }

  const register = async () => {
    setIsSigningUp(true);

    if(email!='' && password!='' && passwordsMatch) 
      setCanRegister(true);
    else {
      setCanRegister(false);
      console.log('Registration conditions are not met. Exiting gracefully.');
      return;  
    }
    //temperorily, remove it
    navigation.navigate("Login")

    //api call to post the login creds in login collection
    try {
      const creds = {username: email, password : password}

      const response = await api.postCredentials(creds)
      console.log('User registered');
      setIsSigningUp(false);
      navigation.navigate("Login") // after successfull sign in navigate it to home page
    } 
    catch (error) {
      console.error('Error registering user:', error);
    } 
  };

  return (
    <View style={styles.container}>
      <View style={styles.Middle}>
        <Text style={styles.SignupText}>Signup</Text>
        <Text style={styles.LoginText}>Lets create a new Account</Text>
      </View>

      {/*Username or Email Input Field */}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
        <Text style={styles.inputFieldText}>Email or Username </Text>
          <Input
            InputLeftElement={
              <Image source= {require('client/assets/icons/person.png')} style={{height:16, width:16, marginLeft:10}}/>
            }
            variant="rounded"
            placeholder="Email"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
            onChangeText={handleEmailInputChange}
            value={email}
          />
        </View>
      </View>

      {/* Password Input Field */}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
        <Text style={styles.inputFieldText}>Password </Text>
          <Input
            InputLeftElement={
              <Image source= {require('client/assets/icons/hideeye.png')} style={{height:16, width:16, marginLeft:10}}/>
            }
            variant="rounded"
            secureTextEntry={true}
            placeholder="Password"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
            onChangeText={handlePasswordInputChange}
            value={password}
          />
        </View>
      </View>

      {/*Confirm Password Input Field */}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
          <Text style={styles.inputFieldText}>Confirm Password</Text>
          <Input
            InputLeftElement={
              <Image source= {require('client/assets/icons/hideeye.png')} style={{height:16, width:16, marginLeft:10}}/>
            }
            variant="rounded"
            secureTextEntry={true}
            placeholder="Confirm Password"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
            onChangeText={handleConfirmPasswordInputChange}
            value={confirmPassword}
          />
          {!passwordsMatch && <Text style={{ color: 'red' }}>Passwords do not match</Text>}
        </View>
      </View>

      {/* Button */}
      <View style={styles.buttonStyle}>
        <Button isDisabled={disable} onPress={register} style={styles.buttonDesign}>
            Create an Account
        </Button>
        {!canRegister && <Text style={{color: 'red' }}>Please enter appropriate details</Text>}
      </View>

      {isSigningUp && (
        <View style={styles.buttonStyle}>
          <Button
            isDisabled={true}
            style={[styles.buttonDesign]}
          >
            <HStack space={5} justifyContent="center">
              <Spinner accessibilityLabel="loading" />
            </HStack>
          </Button>
        </View>
      )}

      {/* Line */}
      <View style={styles.lineStyle}>
        <View>
          <Text style={{width: 50, textAlign: 'center', color:'grey'}}>-or-</Text>
        </View>
      </View>

      {/* Box */}
      <View style={styles.boxStyle}>
      <Box
      onPress={() => navigation.navigate("#")} // for navigation
      style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'center', height: 40, width: '100%' }}
      shadow={3}
      _light={{backgroundColor: "gray.50"}}
      _dark={{backgroundColor: "gray.700"}}
      >
      <Image source={{uri: "https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png",}}
      alt="image"
      style={{ width: 40, height: 40, marginRight: 10 }}
      />
      <HStack space={2} alignItems="center">
      <Text>Login with Google</Text>
      </HStack>
      </Box>
      </View>

      {/* <StatusBar style="auto" />*/}
       <View style={styles.text2}>
        <Text>Already have account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")} ><Text style={styles.loginText}> Login </Text></TouchableOpacity>
      </View>
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
     
        <Signup />
      
    </NativeBaseProvider>
  )
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   SignupText: {
//     marginTop:100,
//     fontSize:30,
//     fontWeight:'bold',
//   },
//   LoginText:{
//     marginTop:20,
//     fontSize:20,
//     color: 'grey',
//   },
//   Middle:{
//     alignItems:'center',
//     justifyContent:'center',
//   },
//   text2:{
//     flexDirection:'row',
//     justifyContent:'center',
//     paddingTop:5,
//     marginTop:50,
//   },
//   loginText:{
//     fontWeight:'bold',
//     color:theme.primaryColor
//   },
//   emailField:{
//     marginTop:30,
//     marginLeft:15
//   },
//   emailInput:{
//     marginTop:10,
//     marginRight:5
//   },
//   buttonStyle:{
//     marginTop:30,
//     marginLeft:15,
//     marginRight:15
//   },
//   buttonStyleX:{
//     marginTop:12,
//     marginLeft:15,
//     marginRight:15
//   },
//   buttonDesign:{
//     backgroundColor:theme.primaryColor,
//     borderRadius: 20
//   },
//   lineStyle:{
//     flexDirection:'row',
//     marginTop:30,
//     marginLeft:15,
//     marginRight:15,
//     alignItems:'center',
//     justifyContent:'center'
//   },
//   imageStyle:{
//     width:80,
//     height:80,
//     marginLeft:20,
//   },
//   boxStyle:{
//     flexDirection:'row',
//     marginTop:30,
//     marginLeft:15,
//     marginRight:15,
//     justifyContent:'space-around'
//   },
//   inputFieldText:{
//     marginBottom: 5,
//     color: 'grey',
//     fontWeight:'bold',
//     fontSize: 10
//   }
// });