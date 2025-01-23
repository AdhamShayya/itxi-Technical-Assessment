import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import { OnboardingNavigator } from './onboarding.navigator';
import { appRoutes, settingsRoutes } from '../enums';
import linking from '../../linking';
import VoicebotScreen from '../screens/VoiceBotScreen';
import SettingsNavigator from './settings.navigator';
import SetCompanyIDScreen from '../screens/SetCompanyIdScreen';
import EnterCompanyIDScreen from '../screens/EnterCompanyIdScreen';

// Create navigators
const RootStack = createNativeStackNavigator();

const modalScreenOptions = {
  presentation: 'modal' as const,
  animation: 'fade' as const,
  headerShown: false,
};


// Root navigator
const AppNavigator = () => {
  return (
    // for deep linking
    <NavigationContainer linking={linking}>
      <RootStack.Navigator initialRouteName="Onboarding">
        <RootStack.Screen
          name={appRoutes.onboarding}
          component={OnboardingNavigator}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={appRoutes.mainRoute}
          component={HomeScreen}
          options={{
            headerShown: false,
            animation: 'slide_from_bottom',  // to show the home from the bottom to the top
          }}
        />
        {/* to open the setCompanyID through deep linking */}
        <RootStack.Screen
          name={settingsRoutes.setCompanyID}
          component={SetCompanyIDScreen}
        />
        <RootStack.Screen
          name={settingsRoutes.companyID}
          component={EnterCompanyIDScreen}
          options={{
            title: 'Enter Company ID',
          }}
        />
        <RootStack.Group screenOptions={modalScreenOptions}>
          <RootStack.Screen
            name={appRoutes.voiceBot}
            component={VoicebotScreen}
          />
          <RootStack.Screen
            name={appRoutes.settingsStack}
            component={SettingsNavigator}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
