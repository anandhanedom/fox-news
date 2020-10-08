export const addBookmark = (bookmarks, articleToBookmark) => {
  const existingBookmark = bookmarks.find(
    (bookmark) => bookmark.title === articleToBookmark.title
  );

  if (!existingBookmark) {
    return [...bookmarks, { ...articleToBookmark }];
  } else {
    alert('Already bookmarked!');
    return [...bookmarks];
  }
};

export const removeBookmark = (bookmarks, articleToRemove) => {
  return bookmarks.filter((article) => article.title !== articleToRemove.title);
};
