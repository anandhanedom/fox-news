import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//Selectors
import { selectBookmarkedArticles } from '../../redux/bookmarks/bookmarks.selectors.js';

//Actions

//Components
import Directory from '../../components/directory/directory';

const BookmarkPage = ({ articles }) => (
  <div>
    <Directory articles={articles} isBookmark={false} />;
  </div>
);

const mapStateToProps = createStructuredSelector({
  articles: selectBookmarkedArticles,
});

export default connect(mapStateToProps)(BookmarkPage);
