import {
  FETCH_USER_LOADING,
  FETCH_USER,
  FETCH_USER_STOP_LOADING,
  FETCH_USER_ERROR
} from './user.actionTypes';

const initalState = {
  searchUserLoading: false,
  user: {
    id: '',
    name: '',
    email: ''
  },
  searchUserError: false
};

const reducers = (state = { ...initalState }, action) => {
  switch(action.type) {
    case FETCH_USER_LOADING: return {
      ...state,
      searchUserLoading: true,
    };
    case FETCH_USER: return {
      ...state,
      user: { ...state.user, ...action.payload },
      searchUserLoading: false
      
    };
    case FETCH_USER_STOP_LOADING: return {
      ...state,
      searchUserLoading: false,
    };
    case FETCH_USER_ERROR: return {
      ...state,
      searchUserLoading: false,
      searchUserError: true
    };
    default: return state
  }
};

export default reducers