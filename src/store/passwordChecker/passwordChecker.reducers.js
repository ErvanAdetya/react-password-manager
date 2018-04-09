import {
  PASSWORD_CONTAIN_ALL_REQUIREMENT,
  PASSWORD_CONTAIN_LOWERCASE,
  PASSWORD_CONTAIN_UPPERCASE,
  PASSWORD_CONTAIN_SPECIALCHAR,
  PASSWORD_CONTAIN_NUMERIC,
  PASSWORD_CONTAIN_MIN_LENGTH
} from './passwordChecker.actionTypes';

const initalState = {
  requirement: false,
  minLength: false,
  uppercase: false,
  lowercase: false,
  specialchar: false,
  numeric: false
};

const reducers = (state = { ...initalState }, action) => {
  switch(action.type) {
    case PASSWORD_CONTAIN_ALL_REQUIREMENT: return {
      ...state,
      requirement: action.payload
    }
    case PASSWORD_CONTAIN_LOWERCASE: return {
      ...state,
      lowercase: action.payload
    }
    case PASSWORD_CONTAIN_UPPERCASE: return {
      ...state,
      uppercase: action.payload
    }
    case PASSWORD_CONTAIN_SPECIALCHAR: return {
      ...state,
      specialchar: action.payload
    }
    case PASSWORD_CONTAIN_NUMERIC: return {
      ...state,
      numeric: action.payload
    }
    case PASSWORD_CONTAIN_MIN_LENGTH: return {
      ...state,
      minLength: action.payload
    }
    default: return state;
  }
};

export default reducers