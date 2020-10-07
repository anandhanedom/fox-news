import { createSelector } from 'reselect';

const selectDirectory = (state) => state.directory;

export const selectDirectoryArticles = createSelector(
  [selectDirectory],
  (directory) => directory.articles
);
