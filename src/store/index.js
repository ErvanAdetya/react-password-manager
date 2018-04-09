import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import userReducer from './user/user.reducers';
import messageReducer from './message/message.reducers';
import newPasswordReducer from './newPassword/newPassword.reducers';
import passwordsListReducer from './passwordsList/passwordsList.reducers';
import passwordCheckerReducer from './passwordChecker/passwordChecker.reducers'
import searchPasswordReducer from './searchPassword/searchPassword.reducers'

const reducers = combineReducers({
  userReducer: userReducer,
  messageReducer: messageReducer,
  newPasswordReducer: newPasswordReducer,
  passwordsListReducer: passwordsListReducer,
  passwordCheckerReducer: passwordCheckerReducer,
  searchPasswordReducer: searchPasswordReducer
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;