import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../Shared/Colors';

const BookItem = ({ title, icon }) => (
  <TouchableOpacity style={styles.item}>
    <Icon name={icon} size={24} color={Colors.primary} />
    <Text style={styles.itemText}>{title}</Text>
  </TouchableOpacity>
);

export default function Books() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <BookItem title="Constitution" icon="file-text" />
        <BookItem title="Acts" icon="file-text" />
        <BookItem title="Rules & Regulations" icon="file-text" />
        <BookItem title="Policies" icon="file-text" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  itemText: {
    fontSize: 18,
    marginLeft: 10,
    color: Colors.black,
  },
});
