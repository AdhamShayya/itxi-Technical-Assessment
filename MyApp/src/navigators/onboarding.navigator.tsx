import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import CompanyIDScreen from '../screens/CompanyIdScreen';
import PickVoiceScreen from '../screens/PickVoiceScreen';
import { onboardingNames } from '../enums';

const Stack = createNativeStackNavigator();

export const OnboardingNavigator = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name={onboardingNames.welcome}
        component={WelcomeScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name={onboardingNames.companyID}
        component={CompanyIDScreen}
        options={{
          title: 'Enter Company ID',
          headerBackVisible: true, // to show the back button
        }}
      />
      <Stack.Screen  
        name={onboardingNames.pickVoice}
        component={PickVoiceScreen}
        options={{
          title: 'Pick Voice',
          headerBackVisible: true,
        }}
      />
    </Stack.Navigator>
  );
};
