import React from 'react';
import { View, Button } from 'react-native';

function GuestScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go Back"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
}

export default GuestScreen;