import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio, HStack } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { alignContent, flex, flexDirection, marginBottom, width } from 'styled-system';
import * as api from 'client/src/utils/api.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from 'client/src/utils/auth.js'
import {theme} from 'client/src/utils/theme.js'



function Login() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [canLogin, setCanLogin] = useState(true);
    const [disable, setDisable] = useState(true);

    const handleEmailInputChange = (value) => {
      setEmail(value);
      if(email.length > 0 && password.length > 0) 
        setDisable(false); 
      if(email.length === 0 ||  password.length === 0) 
        setDisable(true);
      console.log(email);
    }
  
    const handlePasswordInputChange = (value) => {
      setPassword(value);
      if(password.length > 0 && email.length > 0)
        setDisable(false);
      if(email.length === 0 ||  password.length === 0) 
        setDisable(true)
      console.log(password);
    }

    const login = async () =>{
      console.log('login button pressed')

      if(email!=='' && password!=='') {
        setCanLogin(true);
        
      }
      else {
        setCanLogin(false);
        console.log('Cannot Login! Enter all the details');
        return;  
      }

      try{
        const creds = {username: email, password : password}
        console.log('--------try--------')
        const response = await api.validateCredentials(creds);

        //store the token in AsyncStorage
        console.log('token response: ')
        const token = response.data.token;
        console.log(token)

        if(token!=null){
          await AsyncStorage.setItem('authToken', JSON.stringify(token));
          navigation.navigate('ProductList')
          console.log('Authentication is successful');
        }
        else
          console.log('---null token---');

        const storedToken = await AsyncStorage.getItem('authToken');
        authToken = JSON.parse(storedToken);
        console.log('Stored authToken:', authToken);
      }
      catch(error){
        console.error('Error logging in user:', error);
      }
      
    }


  return (
      <View style={styles.container}>
      <View style={styles.Middle}>
        <Text style={styles.WelcomeText}>Homoeo World!</Text>
        <Text style={styles.LoginText}>Log in to your account</Text>
      </View>
      {/* <View style={styles.text2}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")} ><Text style={styles.signupText}> Sign up</Text></TouchableOpacity>
      </View> */}

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyle}>
        
        <View style={styles.emailInput}>
          <Text style={styles.inputFieldText}>Email or Username </Text>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="user-secret" />}
                size="sm"
                m={2}
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
            placeholder="Username or Email"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
            onChangeText={handleEmailInputChange}
          />
        </View>
      </View>

      {/* Password Input Field */}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
        <Text style={styles.inputFieldText}>Password</Text>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="key" />}
                size="sm"
                m={2}
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
            secureTextEntry={true}
            placeholder="Password"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
            onChangeText={handlePasswordInputChange}
          />
        </View>
      </View>

      {/* Button */}
      <View style={styles.buttonStyle}>
        <Button onPress={login} style={[styles.buttonDesign, disable && styles.buttonDisabledDesign]} >
            LOGIN
        </Button>
        {!canLogin && <Text style={{color: 'red' }}>Please enter all the details</Text>}
      </View>

      {/* Line */}
      <View style={styles.lineStyle}>
        <View style={{flex: 1, height: 0, backgroundColor: 'black'}} />
        <View>
          <Text style={{width: 50, textAlign: 'center', color:'grey'}}>-or-</Text>
        </View>
        <View style={{flex: 1, height: 0, backgroundColor: 'black'}} />
      </View>

      {/* Box */}
      <View style={styles.boxStyle}>

      <Box
      onPress={() => navigation.navigate("#")} // for navigation
      style={{ flexDirection: 'row', alignItems: 'center', height: 40, width: '100%' }}
        shadow={3}
        _light={{
        backgroundColor: "gray.50",
      }}
      _dark={{
      backgroundColor: "gray.700",
      }}
      >
      <Image
        source={{
        uri: "https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png",
      }}
      alt="image"
      style={{ width: 40, height: 40, marginRight: 10 }}
      />
      <HStack space={10} alignItems="center" justifyContent="center">
          <Text>Login with Google</Text>
      </HStack>
      </Box>

      {/* <Box 
        onPress={() => navigation.navigate("#")}  // for navigation 
        style={{height:80, width:80}} 
        shadow={3}
        _light={{
          backgroundColor: "gray.50",
        }}
        _dark={{
          backgroundColor: "gray.700",
        }}
      >
        <AspectRatio ratio={1 / 1}>
          <Image
            roundedTop="lg"
            source={{
              uri: "https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png",
            }}
            alt="image"
          />
        </AspectRatio>
      </Box> */}
      </View>
      {/* <StatusBar style="auto" /> */}

      <View style={styles.text2}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")} ><Text style={styles.signupText}> Sign up</Text></TouchableOpacity>
      </View>
    </View>
    
  );
}

export default () => {
  return (
    <NativeBaseProvider>
     
        <Login />
      
    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7'
  },
  LoginText: {
    marginTop:20,
    fontSize:20,
    color: 'grey',
    // fontWeight:'bold',
  },
  WelcomeText:{
    marginTop:100,
    fontSize:30,
    fontWeight:'bold',
  },
  Middle:{
    alignItems:'center',
    justifyContent:'center',
  },
  text2:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:5,
    marginTop: 150
  },
  signupText:{
    fontWeight:'bold',
    color: theme.primaryColor
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
    backgroundColor: theme.primaryColor // 
  },
  buttonDisabledDesign:{
    opacity: 0.5,
  },
  lineStyle:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:15,
    marginRight:15,
    alignItems:'center'
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