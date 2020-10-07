export const addBookmark = (bookmarks, articleToBookmark) => {
  const existingBookmark = bookmarks.find(
    (bookmark) => bookmark.title === articleToBookmark.title
  );

  if (!existingBookmark) {
    return [...bookmarks, { ...articleToBookmark }];
  } else {
    console.log('Already bookmarked!');
  }
};
