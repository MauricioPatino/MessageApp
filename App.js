import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <Text style={styles.box}>Welcome to ChatApp!</Text>
      <View style={styles.fixToText}>
        <Button
          title="Sign In"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Continue as Guest"
          onPress={() => Alert.alert('Right button pressed')}
        />
        </View>
      <StatusBar style="auto" />
    </View>

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
