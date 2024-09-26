import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import Colors from '../Shared/Colors';

export default function Login({ navigation }) {
  
    const handleLoginPress = () => {
      navigation.navigate('Home');
    };

    const handleSignUpPress = () => {
      navigation.navigate('Signup');
    };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.LoginText}>Login</Text>
        <Text style={styles.UserName}>Username</Text>
        <View style={styles.inputContainer}>
          <AntDesign name="user" size={24} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Type your username"
            placeholderTextColor="#888"
          />
        </View>
        <Text style={styles.Password}>Password</Text>
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={24} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Type your password"
            placeholderTextColor="#888"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.forgotSignUpContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignUpPress}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.orSignUpUsingText}>Or Sign Up Using</Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity>
            <AntDesign name="facebook-square" size={40} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="twitter" size={40} color="#00acee" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="google" size={40} color="#db4a39" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    paddingTop: 40,
    marginTop: -30,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 20,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  LoginText: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 50,
    color: Colors.black,
  },
  UserName: {
    fontSize: 20,
    textAlign: 'left',
    paddingTop: 50,
    color: Colors.black,
    paddingBottom: 8,
  },
  Password: {
    fontSize: 20,
    textAlign: 'left',
    paddingTop: 20,
    color: Colors.black,
    paddingBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 8,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#000',
  },
  forgotSignUpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  forgotText: {
    color: '#3498db',
  },
  signUpText: {
    color: '#3498db',
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  orSignUpUsingText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    alignSelf: 'center',
  },
});
