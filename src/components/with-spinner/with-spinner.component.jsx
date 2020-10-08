import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const WithSpinner = (WrappedComponent) => {
  const classes = useStyles();
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className={classes.root}>
        <CircularProgress />
        <CircularProgress color="secondary" />
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  return Spinner;
};

export default WithSpinner;
