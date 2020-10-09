import { addBookmark, removeBookmark } from './bookmarks.utils';

const INITIAL_STATE = {
  selectedBookmarks: [],
  articleToShow: {},
};

const bookmarksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_BOOKMARK':
      return {
        ...state,
        selectedBookmarks: addBookmark(state.selectedBookmarks, action.payload),
      };

    case 'REMOVE_BOOKMARK':
      return {
        ...state,
        selectedBookmarks: removeBookmark(
          state.selectedBookmarks,
          action.payload
        ),
      };

    case 'SHOW_SELECTED_ARTICLE':
      return {
        ...state,
        articleToShow: action.payload,
      };

    default:
      return state;
  }
};

export default bookmarksReducer;
