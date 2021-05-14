import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import bgImage from '../assets/images/home_background.jpg';
import Quote from '../components/home/Quote.js';

const useStyles = makeStyles({
  homeContainer: {
    position: 'relative',
    minHeight: '100%',
    minWidth: '100%',
    display: 'inline',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
  },

  bgImage: {
    margin: 'auto',
    filter: 'brightness(50%)',
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
      {/* <img className={classes.bgImage} src={bgImage} /> */}
      <div className={classes.quoteBox}>
        <Quote />
      </div>
    </div>
  );
}

export default Home;
