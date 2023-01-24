import React from 'react';
import { StyleSheet, View, ImageBackground, Platform } from 'react-native';

import RegistrationScreen from './Screens/RegistarationScreen';
import LoginScreen from './Screens/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('./assets/img/Register.jpg')}
      >
        <RegistrationScreen />
        {/* <LoginScreen />  */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  input: {
    fontFamily: 'Roboto-Regular',
    borderWidth: 1,
    borderColor: '#f0f8ff',
    borderRadius: 6,
    height: 40,
    color: '#f0f8ff',
  },
  form: {
    marginHorizontal: 40,
  },
  inputTitle: {
    fontFamily: 'Roboto-Regular',
    color: '#f0f8ff',
    marginBottom: 10,
    fontSize: 18,
  },
  btn: {
    borderRadius: 6,
    borderWidth: 1,
    height: 40,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    ...Platform.select({
      ios: {
        backgroundColor: 'transparent',
        borderColor: '#20b2aa',
      },
      android: {
        backgroundColor: '#20b2aa',
        borderColor: 'transparent',
      },
    }),
  },
  btnTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    ...Platform.select({
      ios: {
        color: '#20b2aa',
      },
      android: {
        color: '#f0f8ff',
      },
    }),
  },
  header: {
    alignItems: 'center',
    marginBottom: 120,
  },
  headerTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 30,
    color: '#141414',
  },
});
