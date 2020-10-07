import { combineReducers } from 'redux';

import homepageReducer from '../redux/homepage/homepage.reducer';
import bookmarksReducer from '../redux/bookmarks/bookmarks.reducer';

export default combineReducers({
  homepage: homepageReducer,
  bookmarks: bookmarksReducer,
});
