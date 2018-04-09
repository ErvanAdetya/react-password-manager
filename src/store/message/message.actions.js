import {
  MESSAGE_SUCCESS,
  MESSAGE_WARNING,
  MESSAGE_BLANK
} from './message.actionTypes';

export const messageSuccess = (payload) => {
  return {
    type: MESSAGE_SUCCESS,
    payload: payload
  }
}

export const messageWarning = (payload) => {
  return {
    type: MESSAGE_WARNING,
    payload: payload
  }
}

export const messageBlank = () => {
  return { type: MESSAGE_BLANK }
};
