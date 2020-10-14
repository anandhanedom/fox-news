import React from 'react';

//Individual cards
import NewsCard from '../news-card/news-card.component';

//Material UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  cardsContainer: {
    padding: '100px',
    paddingLeft: '50px',
    paddingRight: '50px',
  },
});

const Directory = ({ articles }) => {
  const classes = useStyles();
  return (
    <div>
      {articles.length > 0 ? (
        <Grid
          container
          spacing={2}
          className={classes.cardsContainer}
          wrap="wrap"
        >
          {articles.map((article, index) => (
            <Grid item xs={1} sm={3}>
              <NewsCard key={index} article={article} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <h2 style={{ marginTop: '100px', textAlign: 'center' }}>
          No bookmarks!
        </h2>
      )}
    </div>
  );
};

export default Directory;
