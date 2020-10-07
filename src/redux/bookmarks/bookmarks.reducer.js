import { addBookmark } from './bookmarks.utils';

const INITIAL_STATE = {
  bookmarks: [],
};

const bookmarksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_BOOKMARK':
      return {
        ...state,
        booksmarks: addBookmark(state.bookmarks, action.payload),
      };

    default:
      return state;
  }
};

export default bookmarksReducer;
