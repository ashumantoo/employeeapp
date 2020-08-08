import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './screens/Home';
import { CreateEmployee } from './screens/createEmployee';
import { Profile } from './screens/Profile';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Create" component={CreateEmployee} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer styles={styles.container}>
      <App />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    // marginTop: Constants.statusBarHeight,
    // flexDirection:"row",
    // alignItems: 'center',   //center the text cloumn wise
    // justifyContent: 'center',  //center the text row wise
  },
});
