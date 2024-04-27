import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import GuestScreen from '../screens/GuestScreen';

//creates a stack navigator reference
const Stack = createStackNavigator();

function AppNavigator() { //Contains the navigator and stack components
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn">
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="GuestScreen" component={GuestScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        );
}

export default AppNavigator;