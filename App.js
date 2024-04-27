import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator  from './navigation/AppNavigator';

export default function App() {
  return (
        <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25,
    padding: 10,
    borderColor: "black",
    borderWidth: 5,
    borderRadius: 10,
  },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
    },

});

//<View style={styles.container}>
//      <Text style={styles.box}>Welcome to ChatApp!</Text>
//      <View style={styles.fixToText}>
//        <Button
//          title="Sign In"
//          onPress={() => Alert.alert('Left button pressed')}
//        />
//        <Button
//          title="Continue as Guest"
//          onPress={() => Alert.alert('Right button pressed')}
//        />
//        </View>
//      <StatusBar style="auto" />
//    </View>