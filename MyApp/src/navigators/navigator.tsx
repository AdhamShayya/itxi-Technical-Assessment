import React, { useState, useEffect } from 'react';
import AppNavigator from './app.navigator';
import { StyleSheet, View, Image } from 'react-native';
import { COLORS } from '../styles/colors';
import { APP_ICON_URL } from '@env';

const Navigator = () => {
  const [isInitializing, setIsInitializing] = useState(true);

  // to display the splash screen for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitializing(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  //splash screen, and after initializing it will go to the AppNavigator
  if (isInitializing) {
    return (
      <View style={styles.loadingContainer}>
        <Image 
          source={{ uri: APP_ICON_URL }} 
          style={styles.loadingImage} 
        />
      </View>
    );
  }

  return (
      <AppNavigator />
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  loadingImage: {
    width: 100,
    height: 100,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:  COLORS.black,
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Navigator;
