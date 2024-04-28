import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from '../screens/ChatScreen';

//creates a stack navigator reference
const Stack = createStackNavigator();

function AppNavigator() { //Contains the navigator and stack components
    return (
        <NavigationContainer>
            <Stack.Navigator>
                  <Stack.Screen name="Chat" component={ChatScreen} initialParams={{ user: 'User1' }} />
            </Stack.Navigator>
        </NavigationContainer>
        );
}

export default AppNavigator;