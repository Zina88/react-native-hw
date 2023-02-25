import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Text,
  Platform,
  Dimensions,
  KeyboardAvoidingView,
  Image,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const initialState = {
  login: '',
  email: '',
  password: '',
};

const Show = <Icon name="eye" size={20} color="#BDBDBD" />;
const Hide = <Icon name="eye-slash" size={20} color="#BDBDBD" />;

export default function RegistarationScreen() {
  const [state, setState] = useState(initialState);
  const [loginFocused, setLoginFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [focusedState, setFocusedState] = useState(false);

  const keyboardHide = () => {
    if (state.login === '' || state.email === '' || state.password === '') {
      console.log('Please fill in all fields...');
      return;
    }
    setState(initialState);
    console.log(state);
    Keyboard.dismiss();
  };

  const handlePasswordVisibility = () => {
    if (passwordVisibility) {
      setPasswordVisibility(false);
      return;
    }
    setPasswordVisibility(true);
  };

  return (
    <View
      style={{
        ...styles.container,
        marginTop: focusedState ? 160 : 0,
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.form}>
          <View style={styles.photoWrapper}></View>
          <Image
            style={styles.addImg}
            source={require('../assets/img/add.png')}
          />

          <View style={styles.header}>
            <Text style={styles.headerTitle}>Регистрация</Text>
          </View>
          <View style={{ marginBottom: 16 }}>
            <TextInput
              style={
                loginFocused
                  ? { ...styles.input, ...styles.inputFocused }
                  : styles.input
              }
              placeholder="Логин"
              onFocus={() => {
                setLoginFocused(true), setFocusedState(true);
              }}
              onBlur={() => setLoginFocused(false)}
              value={state.login}
              onChangeText={value =>
                setState(prevState => ({ ...prevState, login: value }))
              }
            />
          </View>
          <View style={{ marginBottom: 16 }}>
            <TextInput
              style={
                emailFocused
                  ? { ...styles.input, ...styles.inputFocused }
                  : styles.input
              }
              placeholder="Адрес электронной почты"
              onFocus={() => {
                setEmailFocused(true), setFocusedState(true);
              }}
              onBlur={() => setEmailFocused(false)}
              value={state.email}
              onChangeText={value =>
                setState(prevState => ({ ...prevState, email: value }))
              }
            />
          </View>
          <View>
            <TextInput
              style={
                passwordFocused
                  ? { ...styles.input, ...styles.inputFocused }
                  : styles.input
              }
              placeholder="Пароль"
              secureTextEntry={passwordVisibility}
              onFocus={() => {
                setPasswordFocused(true), setFocusedState(true);
              }}
              onBlur={() => setPasswordFocused(false)}
              value={state.password}
              onChangeText={value =>
                setState(prevState => ({ ...prevState, password: value }))
              }
            />
            <Pressable
              onPress={handlePasswordVisibility}
              style={{ position: 'absolute', right: 25, top: '30%' }}
            >
              <Text style={styles.showField}>
                {passwordVisibility ? Show : Hide}
              </Text>
            </Pressable>
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
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: Dimensions.get('window').height / 3 - 549,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'relative',
  },

  photoWrapper: {
    backgroundColor: '#F6F6F6',
    width: 120,
    height: 120,
    borderRadius: 16,
    position: 'absolute',
    right: Dimensions.get('window').width / 2 - 60,
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },

  addImg: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: 21,
    right: Dimensions.get('window').width / 2 - 72.5,
  },

  header: {
    alignItems: 'center',
    marginTop: 92,
    marginBottom: 32,
  },

  headerTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    color: '#212121',
  },

  form: {
    marginBottom: 78,
  },

  input: {
    fontFamily: 'Roboto-Regular',
    color: '#212121',
    fontSize: 16,
    padding: 16,
    lineHeight: 19,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    height: 50,
    marginHorizontal: 16,
  },

  inputFocused: {
    color: '#212121',
    borderColor: '#FF6C00',
    backgroundColor: '#FFFFFF',
    border: '1px solid #FF6C00',
  },

  showField: {
    justifyContent: 'center',
    alignItems: 'center',
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
    marginHorizontal: 16,
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
    fontSize: 16,
    color: '#1B4371',
  },
});
