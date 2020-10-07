import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            <Link
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
              to="/"
            >
              Fox News
            </Link>
          </Typography>
          <Button color="inherit">
            <Link
              style={{
                color: 'white',
                textDecoration: 'none',
                textTransform: 'none',
              }}
              to="/bookmarks"
            >
              Bookmarks
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
