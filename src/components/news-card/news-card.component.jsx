import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

//Actions
import {
  addBookmark,
  removeBookmark,
  showSelectedArticle,
} from '../../redux/bookmarks/bookmarks.actions.js';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 30,
  },
  media: {
    height: 350,
  },
});

const NewsCard = ({
  article,
  addBookmark,
  isBookmark,
  removeBookmark,
  showSelectedArticle,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link
        style={{ textDecoration: 'none', color: 'inherit' }}
        to="/article"
        onClick={() => showSelectedArticle(article)}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Img"
            height="180"
            image={`${article.urlToImage}`}
            title="img"
          />
          <CardContent style={{ minHeight: '180px' }}>
            <Typography
              gutterBottom
              variant="h5"
              component="h3"
              style={{ fontFamily: 'Staatliches' }}
            >
              {`${article.title}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              By {article.author}, {article.publishedAt}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        {isBookmark ? (
          <Button
            style={{
              background: '#000',
              borderRadius: '25px',
              padding: '5px 10px',
              color: '#fff',
              fontWeight: '700',
              textTransform: 'unset',
            }}
            size="small"
            color="primary"
            onClick={() => addBookmark(article)}
          >
            <AddIcon fontSize="small" /> &nbsp; Bookmark
          </Button>
        ) : (
          <Button
            style={{
              background: '#000',
              borderRadius: '25px',
              padding: '5px 10px',
              color: '#fff',
              fontWeight: '700',
              textTransform: 'unset',
            }}
            size="small"
            color="primary"
            onClick={() => removeBookmark(article)}
          >
            <RemoveIcon fontSize="small" /> &nbsp; Remove
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addBookmark: (article) => dispatch(addBookmark(article)),
  removeBookmark: (article) => dispatch(removeBookmark(article)),
  showSelectedArticle: (article) => dispatch(showSelectedArticle(article)),
});

export default connect(null, mapDispatchToProps)(NewsCard);
