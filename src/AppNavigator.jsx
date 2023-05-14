import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './screens/FirstScreen';
import { NavigationContainer } from '@react-navigation/native';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    // Navigation
    <NavigationContainer>
      <Stack.Navigator initialRouteName='FirstScreen'>
        <Stack.Screen options={{headerShown: false}} name="FirstScreen" component={FirstScreen} />
        <Stack.Screen options={{headerShown: false}} name="SecondScreen" component={SecondScreen} />
        <Stack.Screen options={{headerShown: false}} name="ThirdScreen" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
