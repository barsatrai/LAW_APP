import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, FlatList, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Colors from '../Shared/Colors';

export default function EditProfile() {
  const [fullname, setFullname] = useState('');
  const [profession, setProfession] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dateofbirth, setDateofbirth] = useState('');
  const [genderModalVisible, setGenderModalVisible] = useState(false);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const genders = ['Male', 'Female', 'Other'];

  const handleSaveChanges = () => {
    // Here you can add the logic to save the changes
    console.log('Changes saved');
  };

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
    setGenderModalVisible(false);
  };

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const handleDateChange = (event, date) => {
    setDatePickerVisible(Platform.OS === 'ios' ? true : false);
    if (date) {
      setSelectedDate(date);
      setDateofbirth(date.toLocaleDateString());
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Edit Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullname}
        onChangeText={setFullname}
      />
      <TextInput
        style={styles.input}
        placeholder="Profession"
        value={profession}
        onChangeText={setProfession}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phonenumber}
        onChangeText={setPhonenumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity
        style={styles.input}
        onPress={() => setGenderModalVisible(true)}
      >
        <Text style={styles.inputText}>{gender || 'Select Gender'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.input}
        onPress={showDatePicker}
      >
        <Text style={styles.inputText}>{dateofbirth || 'Select Date of Birth'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>

      {/* Gender Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={genderModalVisible}
        onRequestClose={() => setGenderModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={genders}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => handleGenderSelect(item)}
                >
                  <Text style={styles.modalText}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />
          </View>
        </View>
      </Modal>

      {/* Date Picker */}
      {datePickerVisible && (
        <DateTimePicker
          testID="dateTimePicker"
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  inputText: {
    fontSize: 16,
    color: Colors.black,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalItem: {
    padding: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  modalText: {
    fontSize: 16,
    color: Colors.black,
  },
});
