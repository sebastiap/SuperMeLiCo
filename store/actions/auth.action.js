import { URL_AUTH_API, URL_LOGIN_API } from '../../constants/database';

import { Alert } from 'react-native';

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const signup = (email, password) => {
  return async dispatch => {
    const response = await fetch(URL_AUTH_API, {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      const errorID = errorResponse.error.message;

      let message = 'No se ha podido registrar';
      if (errorID === 'EMAIL_EXISTS') message = 'Este email ya está registrado';
      Alert.alert('Email existente',
      message,
      [{ text: 'Ok' }]);
      // throw new error(message);
    }
    else {
    const data = await response.json();

    dispatch({
      type: SIGNUP,
      token: data.idToken,
      userId: data.localId,
      mail: email
    });
  }
  }
}

export const login = (email, password) => {
  return async dispatch => {
    const response = await fetch(URL_LOGIN_API, {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      const errorID = errorResponse.error.message;

      let message = 'No se ha podido ingresar';
      let title = 'Error Inesperado'
      if (errorID === 'EMAIL_NOT_FOUND') {message = 'Este email no se encuentra registrado' ; title = 'Email inválido'}
      else if (errorID === 'INVALID_PASSWORD') {message = 'El password ingresado es incorrecto' ; title = 'Password inválido'};
      //ALGUN DIA VER PORQUE NO TIRA ESTE TROW ERROR
      // throw  error(message);
      Alert.alert(title,
      message,
      [{ text: 'Ok' }])
    }
    else {
    const data = await response.json();

    dispatch({
      type: LOGIN,
      token: data.idToken,
      userId: data.localId,
      mail: email
    });
  }
  }
}

export const logout = () => ({
  type: LOGOUT,
  token: null,
  userId: null,
  mail: null
})