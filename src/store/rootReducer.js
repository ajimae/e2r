import { combineReducers } from 'redux';

// reducers
import user from 'modules/user';

const appReducer = combineReducers({
  user,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
