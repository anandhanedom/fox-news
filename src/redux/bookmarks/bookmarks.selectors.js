import { createSelector } from 'reselect';

const selectBookmarks = (state) => state.bookmarks;

export const selectBookmarkedArticles = createSelector(
  [selectBookmarks],
  (bookmarks) => bookmarks.selectedBookmarks
);

export const selectArticle = createSelector(
  [selectBookmarks],
  (bookmarks) => bookmarks.articleToShow
);
