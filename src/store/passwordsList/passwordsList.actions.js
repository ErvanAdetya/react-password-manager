import database from'../../firebase';
import {
  FETCH_PASSWORDS_LOADING,
  FETCH_PASSWORDS,
  FETCH_PASSWORDS_ERROR
} from './passwordsList.actionTypes';

export const showPassword = (payload) => {
  return dispatch => {
    dispatch(fetchingPasswordsLoading);
    console.log(payload)
    database().ref(`users/${payload.userId}/`).child('passwordsList').once('value')
    .then((snapshot) => {
      let val = snapshot.val() || {};
      val = Object.values(val).reverse();
      for(let i in val) {
        if(val[i].id === payload.passwordId) {
          val[i].displayedPassword = val[i].password
        }
      };
      dispatch(fetchPasswords(val));
    })
    .catch((err) => { dispatch(fetchingPasswordsError()) })
  }
}

export const fetchingPasswords = (payload) => {
  return dispatch => {
    dispatch(fetchingPasswordsLoading);
    database().ref(`users/${payload}/`).child('passwordsList').once('value')
    .then((snapshot) => {
      let val = snapshot.val() || {};
      val = Object.values(val)//.reverse();
      dispatch(fetchPasswords(val));
    })
    .catch((err) => { dispatch(fetchingPasswordsError()) })
  }
}

const fetchPasswords = (payload) => {
  return {
    type: FETCH_PASSWORDS,
    payload: payload
  }
}

const fetchingPasswordsLoading = () => {
  return { type: FETCH_PASSWORDS_LOADING }
}

const fetchingPasswordsError = () => {
  return { type: FETCH_PASSWORDS_ERROR }
}
