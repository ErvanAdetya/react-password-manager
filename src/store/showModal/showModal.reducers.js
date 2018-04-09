import {
  EDIT_PASSWORD_MODAL_TRIGGER
} from './user.actionTypes';

const initalState = {
  editPasswordModal: false,
};

const reducers = (state = { ...initalState }, action) => {
  switch(action.type) {
    case EDIT_PASSWORD_MODAL_TRIGGER: return {
      ...state,
      editPasswordModal: !state.editPasswordModal,
    };
    default: return state
  }
};

export default reducers