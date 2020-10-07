import { createSelector } from 'reselect';

const selectHomepage = (state) => state.homepage;

export const selectHomepageArticles = createSelector(
  [selectHomepage],
  (homepage) => homepage.articles
);
