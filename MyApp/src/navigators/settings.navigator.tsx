import React from 'react';
import SettingsScreen from '../screens/SettingsScreen';
import PickVoiceScreen from '../screens/PickVoiceScreen';
import SetCompanyIDScreen from '../screens/SetCompanyIdScreen';
import EnterCompanyIDScreen from '../screens/EnterCompanyIdScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { settingsRoutes } from '../enums';
import PickVoiceSettingsScreen from '../screens/PickVoiceSettings';

const SettingsStack = createNativeStackNavigator();

const SettingsNavigator = () => {
    return (
      <SettingsStack.Navigator>
        <SettingsStack.Screen
          name={settingsRoutes.settings}
          component={SettingsScreen}
          options={{
            title: 'Settings',
          }}
        />
        <SettingsStack.Screen
          name={settingsRoutes.pickVoiceSettings}
          component={PickVoiceSettingsScreen}
          options={{
            title: 'Pick Voice Settings',
          }}
        />
        <SettingsStack.Screen
          name={settingsRoutes.setCompanyID}
          component={SetCompanyIDScreen}
          options={{
            title: 'Set Company ID',
          }}
        />
        <SettingsStack.Screen
          name={settingsRoutes.enterCompanyID}
          component={EnterCompanyIDScreen}
          options={{
            title: 'Enter Company ID',
          }}
        />
      </SettingsStack.Navigator>
    );
  };
  export default SettingsNavigator;
