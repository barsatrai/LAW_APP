import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Colors from '../Shared/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home({ navigation }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');
      // Here you can also add the code to get the response from the virtual assistant
      setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: 'This is a response from the virtual assistant.' }]);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
            <Icon name="user" size={30} color={Colors.black} />
            <Text style={styles.buttonText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('History')}>
            <Icon name="history" size={30} color={Colors.black} />
            <Text style={styles.buttonText}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Books')}>
            <Icon name="book" size={30} color={Colors.black} />
            <Text style={styles.buttonText}>Books</Text>
          </TouchableOpacity>
        </View>

        {/* Vertical Separator */}
        <View style={styles.verticalSeparator} />

        {/* Main Content Area */}
        <View style={styles.mainContent}>
          {/* Header with the app name */}
          <View style={styles.header}>
            <Text style={styles.headerText}>LegalBuddy</Text>
          </View>

          {/* Chat Container */}
          <View style={styles.chatContainer}>
            <ScrollView
              style={styles.chatBox}
              contentContainerStyle={{ paddingBottom: 20 }}
              ref={(ref) => { this.scrollView = ref; }}
              onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}
            >
              {messages.map((message, index) => (
                <View key={index} style={[styles.messageContainer, message.sender === 'user' ? styles.userMessage : styles.botMessage]}>
                  <Text style={styles.messageText}>{message.text}</Text>
                </View>
              ))}
            </ScrollView>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={input}
                onChangeText={setInput}
                placeholder="Type a message"
                placeholderTextColor="#888"
              />
              <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                <Text style={styles.sendButtonText}>Send</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: '20%',
    backgroundColor: '#f5f5f5',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    marginTop: 5,
    color: Colors.black,
    fontSize: 12,
    fontWeight: 'bold',
  },
  verticalSeparator: {
    width: 1,
    backgroundColor: '#ccc',
    height: '100%',
  },
  mainContent: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    color: Colors.black,
    fontWeight: 'bold',
  },
  chatContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  chatBox: {
    flex: 1,
  },
  messageContainer: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: Colors.primary,
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: Colors.lightGray,
    alignSelf: 'flex-start',
  },
  messageText: {
    color: Colors.white,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderWidth: 3,    
    borderRadius: 20,
    borderColor: '#ccc',
    padding: 10,
    backgroundColor: Colors.white,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
    borderColor: '#ccc',
    marginRight: 10,
    backgroundColor: Colors.white,
  },
  sendButton: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 20,
  },
  sendButtonText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
});
