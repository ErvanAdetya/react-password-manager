import {
  SAVE_PASSWORD_HANDLE_CHANGE,
  SAVE_PASSWORD_LOADING,
  SAVE_PASSWORD_SUCCESS,
  SAVE_PASSWORD_ERROR,
  SET_NEW_PASSWORD_VALUE
} from './newPassword.actionTypes';

const initalState = {
  id: '',
  url:'',
  email:'',
  password:'',
  createdAt:'',
  updatedAt:'',
  savePasswordLoading: false,
  savePasswordError: false
};

const reducers = (state = { ...initalState }, action) => {
  switch(action.type) {
    case SAVE_PASSWORD_HANDLE_CHANGE: return {
      ...state,
      [action.payload.name]: action.payload.value
    }
    case SAVE_PASSWORD_LOADING: return {
      ...state,
      savePasswordLoading: true,
    };
    case SAVE_PASSWORD_SUCCESS: return { ...initalState };
    case SAVE_PASSWORD_ERROR: return {
      ...state,
      savePasswordLoading: false,
      savePasswordError: true
    };
    case SET_NEW_PASSWORD_VALUE: return {
      ...initalState,
      ...action.payload
    }
    default: return state;
  }
};

export default reducers