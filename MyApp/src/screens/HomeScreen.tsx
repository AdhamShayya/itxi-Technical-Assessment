
import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../styles/colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { appRoutes } from '../enums';

const HomeScreen = ({ navigation }: { navigation:  NativeStackNavigationProp<any> }) => {
  return (
    <View style={styles.screen}>
      <TouchableOpacity
        style={styles.settingsButton}
        onPress={() => navigation.navigate(appRoutes.settingsStack)}
      >
        <FontAwesomeIcon icon={faGear} size={24} color={COLORS.primaryBlue} />
      </TouchableOpacity>

      <Text style={styles.title}>Main Screen</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(appRoutes.voiceBot)}
      >
        <Text style={styles.buttonText}>Launch Voicebot screen</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.primaryBlue,
  },
  button: {
    backgroundColor: COLORS.primaryBlue,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
  settingsButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
});

export default HomeScreen;
