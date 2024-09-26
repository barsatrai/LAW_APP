// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Welcome from './App/Pages/Welcome';
// import Login from './App/Pages/Login';
// import Signup from './App/Pages/Signup';
// import Home from './App/Pages/Home';

//----------welcome------------------------------------
// export default function App() {
//   return (
//     <View>
//      <Welcome/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//-----------Login------------------------------------
// export default function App() {
//   return (
//     <View>
//      <Login/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

//---------------signup-------------------------
// export default function App() {
//   return (
//     <View>
//      <Signup/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

//-----------Homepage----------------------------

// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomePage from './App/Pages/Home';
// import ProfilePage from './App/Pages/Profile';
// import VirtualAssistantPage from './App/Pages/VA';
// import HistoryPage from './App/Pages/History';
// import BooksPage from './App/Pages/Books';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomePage} />
//         <Stack.Screen name="Profile" component={ProfilePage} />
//         <Stack.Screen name="VirtualAssistant" component={VirtualAssistantPage} />
//         <Stack.Screen name="History" component={HistoryPage} />
//         <Stack.Screen name="Books" component={BooksPage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


// App.js
import React from 'react';
import Navigation from './Navigation';

export default function App() {
  return <Navigation />;
}
