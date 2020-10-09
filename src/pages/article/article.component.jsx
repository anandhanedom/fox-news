import React from 'react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

//Selectors
import { selectArticle } from '../../redux/bookmarks/bookmarks.selectors.js';

const ArticlePage = ({ selectedArticle }) => {
  return <div>{selectedArticle.author}</div>;
};

const mapStateToProps = createStructuredSelector({
  selectedArticle: selectArticle,
});

export default connect(mapStateToProps)(ArticlePage);
