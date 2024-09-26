import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../Shared/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Your Profile</Text>
      <TouchableOpacity 
        style={styles.optionButton} 
        onPress={() => navigation.navigate('EditProfile')}
      >
        <Icon name="edit" size={24} color={Colors.primary} style={styles.icon} />
        <Text style={styles.optionText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.optionButton} 
        onPress={() => navigation.navigate('Bookmarks')}
      >
        <Icon name="bookmark" size={24} color={Colors.primary} style={styles.icon} />
        <Text style={styles.optionText}>Bookmarks</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.optionButton} 
        onPress={() => console.log('Clear History pressed')}
      >
        <Icon name="history" size={24} color={Colors.primary} style={styles.icon} />
        <Text style={styles.optionText}>Clear History</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.optionButton} 
        onPress={() => console.log('Logout pressed')}
      >
        <Icon name="sign-out" size={24} color={Colors.primary} style={styles.icon} />
        <Text style={styles.optionText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 30,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  optionText: {
    fontSize: 18,
    color: Colors.black,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
});
