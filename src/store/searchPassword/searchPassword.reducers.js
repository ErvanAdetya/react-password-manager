import {
  HANDLE_CHANGE_QUERY
} from './searchPassword.actionTypes';

const initalState = {
  query:''
};

const reducers = (state = { ...initalState }, action) => {
  switch(action.type) {
    case HANDLE_CHANGE_QUERY: return {
      ...state,
      query: action.payload,
    };
    
    default: return state
  }
};

export default reducers