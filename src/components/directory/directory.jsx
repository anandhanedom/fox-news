import React from 'react';

import Box from '@material-ui/core/Box';

//Individual cards
import NewsCard from '../news-card/news-card.component';

const Directory = ({ articles }) => {
  return (
    <div>
      <Box
        display="flex"
        bgcolor="background.paper"
        flexWrap="wrap"
        justifyContent="center"
      >
        {articles.length > 0
          ? articles.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))
          : null}
      </Box>
    </div>
  );
};

export default Directory;
