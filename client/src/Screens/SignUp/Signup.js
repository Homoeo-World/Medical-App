import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, HStack, AspectRatio } from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { alignContent, flex, flexDirection, width } from 'styled-system';
import * as api from 'client/src/utils/apis/api.js';


function Signup() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [canRegister, setCanRegister] = useState(true);


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

      navigation.navigate("Login") // after successfull sign in navigate it to home page
    } 
    catch (error) {
      console.error('Error registering user:', error);
    } 
  };

  return (
    <View style={styles.container}>
      <View style={styles.Middle}>
        <Text style={styles.LoginText}>Signup</Text>
      </View>
      <View style={styles.text2}>
        <Text>Already have account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")} ><Text style={styles.signupText}> Login </Text></TouchableOpacity>
      </View>


      {/*Username or Email Input Field */}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<MaterialCommunityIcons name="email" />}
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
            value={password}
          />
        </View>
      </View>

      {/*Confirm Password Input Field */}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
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
        <Button onPress={register} style={styles.buttonDesign}>
            REGISTER NOW
        </Button>
        {!canRegister && <Text style={{color: 'red' }}>Please enter appropriate details</Text>}
      </View>

      {/* Line */}
      <View style={styles.lineStyle}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text style={{width: 50, textAlign: 'center'}}>Or</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
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
      <HStack space={2} alignItems="center">
      <Text>Signup with Google</Text>
      </HStack>
      </Box>
      
      {/* <Box 
        onPress={() => navigation.navigate("#")}  // for navigation
        style={styles.imageStyle}
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
              uri: "https://www.transparentpng.com/thumb/twitter/bird-twitter-socialmedia-icons-png-5.png",
            }}
            alt="image"
          />
        </AspectRatio>
      </Box> */}
      
      </View>
      <StatusBar style="auto" />
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  LoginText: {
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
    paddingTop:5
  },
  signupText:{
    fontWeight:'bold'
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
    backgroundColor:'#026efd'
  },
  // disabledButton: { 
  //   opacity: 0.6, 
  //   backgroundColor:"red"
  // },
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
});