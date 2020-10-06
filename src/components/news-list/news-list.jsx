import React from 'react';
import Box from '@material-ui/core/Box';

import NewsCard from '../news-card/news-card.component';

class NewsList extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    var url =
      'http://newsapi.org/v2/everything?' +
      'q=Apple&' +
      'from=2020-10-06&' +
      'sortBy=popularity&' +
      'apiKey=fa03504e961340c8a3bfcdfb580cbc7f';

    var req = new Request(url);
    fetch(req)
      .then((res) => res.json())
      .then((news) => this.setState({ articles: news.articles }));
  }

  render() {
    const { articles } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <Box display="flex" p={1} bgcolor="background.paper" flexWrap="wrap">
          {articles.map((article) => (
            <NewsCard article={article} />
          ))}
        </Box>
      </div>
    );
  }
}

export default NewsList;
