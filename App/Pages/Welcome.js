import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../Shared/Colors';

export default function Welcome({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <Image source={require('./../Assets/Images/va.jpg')} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to LegalBuddy</Text>
        <Text style={styles.loginText}>We will help you with your legal inquiries, provide legal advice, 
          and help with legal document preparation.</Text>
          <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Get started</Text>
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
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  welcomeText: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 50,
    color: Colors.primary,
  },
  loginText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 10,
    color: Colors.secondary,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    marginVertical: 30,
    marginHorizontal: 50,
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
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
