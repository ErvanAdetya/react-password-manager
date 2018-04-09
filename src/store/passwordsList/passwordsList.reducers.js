import {
  FETCH_PASSWORDS_LOADING,
  FETCH_PASSWORDS,
  FETCH_PASSWORDS_ERROR
} from './passwordsList.actionTypes';

const initalState = {
  loading: false,
  passwords: [],
  error: false
};

const reducers = (state = { ...initalState }, action) => {
  switch(action.type) {
    case FETCH_PASSWORDS_LOADING: return {
      ...state,
      loading: true,
    };
    case FETCH_PASSWORDS: return {
      ...state,
      passwords: [ ...action.payload ],
      loading: false
      
    };
    case FETCH_PASSWORDS_ERROR: return {
      ...state,
      loading: false,
      error: true
    };
    default: return state
  }
};

export default reducers