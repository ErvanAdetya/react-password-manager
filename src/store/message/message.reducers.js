import {
  MESSAGE_SUCCESS,
  MESSAGE_WARNING,
  MESSAGE_BLANK
} from './message.actionTypes';

const initalState = {
  text:'',
  className:'Message'
};

const reducers = (state = { ...initalState }, action) => {
  switch(action.type) {
    case MESSAGE_BLANK: return { ...initalState }
    case MESSAGE_SUCCESS: return {
      ...state,
      text: action.payload,
      className: 'message message-success'
    };
    case MESSAGE_WARNING: return {
      ...state,
      text: action.payload,
      className: 'message message-warning'
    };
    default: return state
  }
};

export default reducers