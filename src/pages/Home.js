import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import bgImage from '../assets/images/home_background.png';
import Quote from '../components/home/Quote.js';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },

  quoteBox: {
    backdropFilter: 'brightness(40%)',
    borderRadius: theme.spacing(1),
    margin: theme.spacing(2),
  },
}));

function Home() {
  const classes = useStyles();

  useEffect(() => {
    console.log('Home page');
  }, []);

  return (
    <div className={classes.homeContainer}>
      <div className={classes.quoteBox}>
        <Quote />
      </div>
    </div>
  );
}

export default Home;
