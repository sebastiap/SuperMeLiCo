import React, { useCallback, useReducer } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';

//Componentes propios
import AuthScreenWrapper from '../../components/Auth/AuthScreenWrapper';
import  COLORS  from '../../constants/colors';
import { login } from '../../store/actions/auth.action';
import Input from '../../components/Auth/Input';
import { formReducer, FORM_INPUT_UPDATE } from './formReducer';

const LoginScreen = () => {
  const dispatch = useDispatch();
  //UseReducer es una alternativa a useState. Acepta un reducer de tipo (state, action) => newState y devuelve el estado actual emparejado con un método dispatch
  // Es decir, no es solo un actualizador sino que puedo meterle logica mas completa en ese reducer
  const [formState, formDispatch] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: '',
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const handleLogIn = () => {
    if (formState.formIsValid) {
      dispatch(login(formState.inputValues.email, formState.inputValues.password));
    } else {
      Alert.alert(
        'Formulario inválido',
        'Ingresa email y usuario válido',
        [{ text: 'Ok' }]
      );
    }
  }

  

  const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
    formDispatch({
      type: FORM_INPUT_UPDATE,
      value: inputValue,
      isValid: inputValidity,
      input: inputIdentifier,
    });
  }, [formDispatch]);

  return (
    <AuthScreenWrapper
      title="INGRESAR"
      message="¿Aún no tienes cuenta?"
      buttonText="Ir al registro"
      buttonPath="Register"
    >
      <Input
        id="email"
        label="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        errorText="Por favor ingresa un email válido"
        required
        email
        onInputChange={onInputChangeHandler}
      />
      <Input
        id="password"
        label="Password"
        secureTextEntry
        autoCapitalize="none"
        errorText="Ingrese contraseña"
        required
        onInputChange={onInputChangeHandler}
      />
      <Button
        title="INGRESAR"
        onPress={handleLogIn}
        buttonStyle={styles.button}
      />
    </AuthScreenWrapper>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.CLARET,
    marginVertical: 20,
  },
});

export default LoginScreen;