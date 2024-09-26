import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import Colors from '../Shared/Colors';

export default function Signup({navigation}) {
  const handleSignUpPress = ({}) => {
    navigation.navigate('Home');

  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.SignupText}>Signup</Text>
        <Text style={styles.EmailText}>Email Address</Text>
        <View style={styles.inputContainer}>
          <AntDesign name="user" size={24} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            placeholderTextColor="#888"
          />
        </View>
        <Text style={styles.Password}>Password</Text>
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={24} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#888"
            secureTextEntry={true}
          />
        </View>
        <Text style={styles.Password}>Confirm Password</Text>
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={24} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            placeholderTextColor="#888"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
          <Text style={styles.buttonText}>SIGNUP</Text>
        </TouchableOpacity>

        </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 250,
  },
  container: {
    paddingTop: 40,
    marginTop: -30,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 20,
    paddingBottom: 130,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  SignupText: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 50,
    color: Colors.black,
  },
  EmailText: {
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
  
});
