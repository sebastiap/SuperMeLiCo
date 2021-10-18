import { SIGNUP, LOGIN , LOGOUT } from '../actions/auth.action';

const INITIAL_STATE = {
  token: null,
  userId: null,
  mail: "user@gmail.com"
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        mail: action.mail
      };
    case LOGIN:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        mail: action.mail
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
        mail: null
      };
    default:
      return state;
  }
}

export default AuthReducer;