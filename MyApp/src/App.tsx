
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigator from '../src/navigators/navigator';
import { View } from 'react-native';

export default function App() {
  return (
    <>
        {/*  helps in positioning UI components accordingly */}
        <SafeAreaProvider>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            {/* helps in interactions like swipes, taps...  */}
            <GestureHandlerRootView>
              <Navigator />
            </GestureHandlerRootView>
          </View>
        </SafeAreaProvider>
    </>
  );
}

