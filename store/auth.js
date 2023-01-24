// auth.js

// action types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// action creators
export function userLogin(token) {
  return { type: LOGIN, token };
}

export function userLogout() {
  return { type: LOGOUT };
}

// reducer
export default function auth(state = { token: null }, action) {
  switch (action.type) {
    case LOGIN:
      return { token: action.token };
    case LOGOUT:
      return { token: null };
    default:
      return state;
  }
}
