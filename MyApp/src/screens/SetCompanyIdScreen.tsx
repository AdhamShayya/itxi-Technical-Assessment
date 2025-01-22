import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../styles/colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { settingsRoutes } from '../enums';

const SetCompanyIDScreen = ({ navigation }: { navigation:  NativeStackNavigationProp<any> }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Set Company ID</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(settingsRoutes.companyID)}
      >
        <Text style={styles.buttonText}>Enter Company ID</Text>
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

export default SetCompanyIDScreen;
