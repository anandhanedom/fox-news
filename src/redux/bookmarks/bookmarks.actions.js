export const addBookmark = (article) => ({
  type: 'ADD_BOOKMARK',
  payload: article,
});

export const removeBookmark = (article) => ({
  type: 'REMOVE_BOOKMARK',
  payload: article,
});

export const showSelectedArticle = (article) => ({
  type: 'SHOW_SELECTED_ARTICLE',
  payload: article,
});
