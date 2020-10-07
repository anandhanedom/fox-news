import React from 'react';
import Box from '@material-ui/core/Box';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectoryArticles } from '../../redux/directory/directory.selectors';

import { setArticles } from '../../redux/directory/directory.actions';

import NewsCard from '../news-card/news-card.component';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    const { setArticles } = this.props;

    var url =
      'http://newsapi.org/v2/everything?' +
      'q=Apple&' +
      'from=2020-10-06&' +
      'sortBy=popularity&' +
      'apiKey=fa03504e961340c8a3bfcdfb580cbc7f';

    var req = new Request(url);
    fetch(req)
      .then((res) => res.json())
      .then((news) => setArticles(news.articles));
  }

  render() {
    const { articles } = this.props;
    return (
      <div>
        <Box
          display="flex"
          bgcolor="background.paper"
          flexWrap="wrap"
          justifyContent="center"
        >
          {articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </Box>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  articles: selectDirectoryArticles,
});

const mapDispatchToProps = (dispatch) => ({
  setArticles: (articles) => dispatch(setArticles(articles)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Directory);
