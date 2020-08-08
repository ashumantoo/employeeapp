import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import { Home } from './screens/Home';
import { CreateEmployee } from './screens/createEmployee';
import { Profile } from './screens/Profile';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home/> */}
      {/* <CreateEmployee /> */}
      <Profile />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    marginTop: Constants.statusBarHeight,
    color: "white"
    // flexDirection:"row",
    // alignItems: 'center',   //center the text cloumn wise
    // justifyContent: 'center',  //center the text row wise
  },
});
