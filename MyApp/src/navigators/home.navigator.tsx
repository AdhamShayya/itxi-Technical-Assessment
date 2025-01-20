import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { homeRoutes } from '../enums';
import HomeScreen from '../screens/HomeScreen';


export const HomeNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName={homeRoutes.main}>
      <Stack.Screen
        name={homeRoutes.main}
        component={HomeScreen}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};
