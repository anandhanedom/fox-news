import React from 'react';

import { connect } from 'react-redux';

//Actions
import { addBookmark } from '../../redux/bookmarks/bookmarks.actions.js';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 30,
  },
  media: {
    height: 350,
  },
});

const NewsCard = ({ article, addBookmark }) => {
  const { author, urlToImage, title, description } = article;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={urlToImage}
          title="news title"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => addBookmark(article)}
        >
          Bookmark
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addBookmark: (article) => dispatch(addBookmark(article)),
});

export default connect(null, mapDispatchToProps)(NewsCard);
