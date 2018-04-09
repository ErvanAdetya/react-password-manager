import {
  HANDLE_CHANGE_QUERY
} from './searchPassword.actionTypes';

export const handleChangeQuery = (payload) => {
  return {
    type: HANDLE_CHANGE_QUERY,
    payload: payload
  }
};
