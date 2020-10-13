import React from 'react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

//CSS
import './article.styles.css';

//Selectors
import { selectArticle } from '../../redux/bookmarks/bookmarks.selectors.js';

import Link from '@material-ui/core/Link';

const ArticlePage = ({ selectedArticle }) => {
  return (
    <div style={{ marginTop: '100px' }}>
      <div className="page-container">
        <div className="article">
          <div className="article__img">
            <img src={`${selectedArticle.urlToImage}`} alt="" />
          </div>
          <div className="article__content">
            <h1>{selectedArticle.title}</h1>
            <p>{selectedArticle.author}</p>
            <p>{selectedArticle.publishedAt}</p>
            <p>{selectedArticle.content}</p>
            <Link
              target="_blank"
              style={{
                background: '#000',
                borderRadius: '25px',
                padding: '10px 20px',
                color: '#fff',
                fontWeight: '700',
                textTransform: 'unset',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
              size="small"
              href={`${selectedArticle.url}`}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  selectedArticle: selectArticle,
});

export default connect(mapStateToProps)(ArticlePage);
