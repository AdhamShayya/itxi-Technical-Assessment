import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../styles/colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { appRoutes } from '../enums';

const PickVoiceScreen = ({ navigation }: { navigation:  NativeStackNavigationProp<any> }) => {
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>Pick Voice</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: appRoutes.mainRoute }],
            });
          }}
        >
          <Text style={styles.buttonText}>Dismiss</Text>
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
  });
  
export default PickVoiceScreen;
