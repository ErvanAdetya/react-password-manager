import database from'../../firebase';
import { compare } from '../../helpers/hash.helper'
import {
  FETCH_USER_LOADING,
  FETCH_USER,
  FETCH_USER_STOP_LOADING,
  FETCH_USER_ERROR
} from './user.actionTypes';
import {
  MESSAGE_BLANK,
  MESSAGE_WARNING
} from '../message/message.actionTypes';


export const searchUser = (payload) => {
  return dispatch => {
    dispatch(searchUserLoading());
    dispatch(messageBlank());
    var ref = database().ref("users");
    ref.orderByChild("email").equalTo(payload.email).once('value')
    .then((snapshot) => {
      if(snapshot.val()) {
          let user = Object.values(snapshot.val())[0];
          if(compare(payload.password, user.password)) {
            dispatch(fetchUser(user));
          } else {
            dispatch(messageWarning('Incorrect Password!'));
            dispatch(stopLoading());
          }
        } else {
          dispatch(messageWarning('Email Not Found!'));
          dispatch(stopLoading());
        };
      })
    .catch((err) => { dispatch(searchUserError(err)); });
  }
}

const fetchUser = (payload) => {
  return {
    type: FETCH_USER,
    payload: payload
  }
};

const searchUserLoading = () => {
  return { type: FETCH_USER_LOADING }
};

const stopLoading = () => {
  return { type: FETCH_USER_STOP_LOADING }
};

const searchUserError = () => {
  return { type: FETCH_USER_ERROR }
};

const messageWarning = (payload) => {
  return {
    type: MESSAGE_WARNING,
    payload: payload
  }
};

const messageBlank = () => {
  return { type: MESSAGE_BLANK }
};
