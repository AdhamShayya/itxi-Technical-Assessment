
import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../styles/colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const HomeScreen = () => {

  return (
    <View style={styles.screen}>
      <Text>Home</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: COLORS.white,
  },
});

export default HomeScreen;
