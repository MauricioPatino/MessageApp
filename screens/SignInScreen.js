import React from 'react';
import { View, Button } from 'react-native';

function SignInScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to GuestScreen"
        onPress={() => navigation.navigate('GuestScreen')}
      />
    </View>
  );
}

export default SignInScreen;