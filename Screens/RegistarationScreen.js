import React, { useState, useCallback, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ImageBackground,
  Text,
  Platform,
  useWindowDimensions,
} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const initialState = {
  login: '',
  email: '',
  password: '',
};

export default function RegistarationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const { height, width, scale, fontScale } = useWindowDimensions();

  //   console.log('width', width);
  //   console.log('scale', scale);

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Bold': require('../assets/fonts/Roboto/Roboto-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        {/* <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          > */}
        <View style={styles.photoWrapper}></View>

        <View style={styles.header}>
          <Text style={styles.headerTitle}>Регистрация</Text>
        </View>

        <View
          style={{
            ...styles.form,
            marginBottom: isShowKeyboard ? 20 : 80,
          }}
        >
          <View>
            <TextInput
              style={styles.input}
              placeholder="Логин"
              textAlign={'center'}
              onFocus={() => setIsShowKeyboard(true)}
              value={state.login}
              onChangeText={value =>
                setState(prevState => ({ ...prevState, login: value }))
              }
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <TextInput
              style={styles.input}
              placeholder="Адрес электронной почты"
              textAlign={'center'}
              onFocus={() => setIsShowKeyboard(true)}
              value={state.email}
              onChangeText={value =>
                setState(prevState => ({ ...prevState, email: value }))
              }
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              textAlign={'center'}
              secureTextEntry={true}
              onFocus={() => setIsShowKeyboard(true)}
              value={state.password}
              onChangeText={value =>
                setState(prevState => ({ ...prevState, password: value }))
              }
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btn}
            onPress={keyboardHide}
          >
            <Text style={styles.btnTitle}>Зарегистрироваться</Text>
          </TouchableOpacity>

          <View style={styles.login}>
            <Text style={styles.loginTitle}>Уже есть аккаунт? Войти</Text>
          </View>
        </View>
        {/* </KeyboardAvoidingView> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 0,
    backgroundColor: '#ffffff',
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // alignItems: 'center',
    justifyContent: 'flex-end',
  },
  photoWrapper: {
    backgroundColor: '#F6F6F6',
    width: 120,
    height: 120,
    borderRadius: 16,
    // alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  headerTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 30,
    // fontWeight: 500,
    color: '##212121',
  },
  form: {
    marginHorizontal: 16,
  },
  input: {
    fontFamily: 'Roboto-Regular',
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    height: 50,
    color: '#212121',
    marginBottom: 16,
  },
  btn: {
    borderRadius: 100,
    borderWidth: 1,
    height: 51,
    marginTop: 43,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6C00',
    borderColor: 'transparent',
    marginBottom: 16,
  },
  btnTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    color: '#f0f8ff',
  },
  login: {
    alignItems: 'center',
  },
  loginTitle: {
    fontFamily: 'Roboto-Regular',
  },
});
