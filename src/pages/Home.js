import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import bgImage from '../assets/images/home_background.jpg';

const useStyles = makeStyles({
  homeContainer: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
  },

  bgImage: {
    position: 'absolute',
    margin: 'auto',
  },
  quoteBox: {
    position: 'absolute',
  },
});

function Home() {
  const classes = useStyles();

  const text = 'Sample Quote';

  useEffect(() => {
    console.log('Home page');
  }, []);

  return (
    <div className={classes.homeContainer}>
      <img className={classes.bgImage} src={bgImage} />
      <div className={classes.quoteBox}>
        <h1> Text</h1>
      </div>
    </div>
  );
}

export default Home;
