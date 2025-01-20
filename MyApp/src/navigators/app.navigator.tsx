import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingNavigator } from './onboarding.navigator';
import { HomeNavigator } from './home.navigator';
import { appRoutes } from '../enums';
const RootStack = createNativeStackNavigator();

const AppNavigator = (): JSX.Element => {
    {/* Splitted into 2 Navigators onboarding and Main*/}
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={appRoutes.onboarding}
        component={OnboardingNavigator}  // contains the onboarding screens
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name={appRoutes.mainRoute}
        component={MainAppNavigator} // contains other screens
        options={{
          headerShown: false,  // no header in the main page
          animation: 'slide_from_bottom',  // to make the main slide from the bottom
        }}
      />
    </RootStack.Navigator>
  );
};

// Separate navigator for main app content
const MainStack = createNativeStackNavigator();
 // implemented it as a main navigator if later on there would be another tabs
const MainAppNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="homeNavigator"
        component={HomeNavigator}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};


export default AppNavigator;
