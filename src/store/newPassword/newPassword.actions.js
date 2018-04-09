import database from'../../firebase';
// import { generate } from '../../helpers/hash.helper'
import {
  SAVE_PASSWORD_HANDLE_CHANGE,
  SAVE_PASSWORD_LOADING,
  SAVE_PASSWORD_SUCCESS,
  SAVE_PASSWORD_ERROR,
  SET_NEW_PASSWORD_VALUE
} from './newPassword.actionTypes';
import { fetchingPasswords } from '../passwordsList/passwordsList.actions';
import { messageBlank } from '../message//message.actions';

export const savePasswordHandleChange = (payload) => {
  return {
    type: SAVE_PASSWORD_HANDLE_CHANGE,
    payload: payload
  }
};

export const savingPassword = (payload) => {
  return dispatch => {
    dispatch(savePasswordLoading());
    dispatch(messageBlank());
    let key;
    if(!payload.newPassword.id) {
      key  = database().ref(`users/${payload.userId}/passwordsList/`).push().key;
      payload.newPassword.id = key;
      payload.newPassword.createdAt = database.ServerValue.TIMESTAMP;
    } else {
      payload.newPassword.updatedAt = database.ServerValue.TIMESTAMP;      
    }
    // payload.newPassword.password =  generate(payload.newPassword.password);
    database().ref(`users/${payload.userId}/passwordsList`).child(payload.newPassword.id).set(payload.newPassword)
    .then(() => {
      dispatch(savePasswordSuccess());
      dispatch(fetchingPasswords(payload.userId));
    })
    .catch((err) => { dispatch(savePasswordError(err)); });
  }
}

export const setNewPasswordValue = (payload) => {
  return {
    type: SET_NEW_PASSWORD_VALUE,
    payload: payload
  }
}

const savePasswordSuccess = () => {
  return { type: SAVE_PASSWORD_SUCCESS }
};

const savePasswordLoading = () => {
  return { type: SAVE_PASSWORD_LOADING }
};


const savePasswordError = () => {
  return { type: SAVE_PASSWORD_ERROR }
};
