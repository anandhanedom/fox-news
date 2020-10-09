import React from 'react';

import Box from '@material-ui/core/Box';

//Individual cards
import NewsCard from '../news-card/news-card.component';

const Directory = ({ articles, isBookmark }) => {
  return (
    <div>
      <Box
        display="flex"
        bgcolor="background.paper"
        flexWrap="wrap"
        justifyContent="center"
      >
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <NewsCard key={index} article={article} isBookmark={isBookmark} />
          ))
        ) : (
          <h2>No bookmarks</h2>
        )}
      </Box>
    </div>
  );
};

export default Directory;
