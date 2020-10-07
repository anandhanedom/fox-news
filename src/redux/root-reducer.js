import { combineReducers } from 'redux';

import homepageReducer from '../redux/homepage/homepage.reducer';

export default combineReducers({
  homepage: homepageReducer,
});
