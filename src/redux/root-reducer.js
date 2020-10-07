import { combineReducers } from 'redux';

import directoryReducer from '../redux/directory/directory.reducer';

export default combineReducers({
  directory: directoryReducer,
});
