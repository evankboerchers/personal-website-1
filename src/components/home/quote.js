import React, { useEffect } from 'react';
import axios from 'axios';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  quoteBox: {
    maxWidth: 500,
    margin: theme.spacing(3),
    color: 'white',
  },

  quote: {
    marginTop: theme.spacing(2),
    fontSize: '1.4rem',
    fontStyle: 'italic',
    fontFamily: 'American Typewriter, serif',
  },

  author: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    fontSize: '1.2rem',
    fontFamily: 'American Typewriter, serif',
  },
}));

function Quote() {
  const classes = useStyles();
  const [quote, setQuote] = React.useState(
    "Stop creating a life that you need a vacation from. Instead move to where you want to live, do what you want to do, start what you want to start and create the life you want today. This isn't rehearsal people. This is YOUR life."
  );
  const [author, setAuthor] = React.useState('Dale Patridge');

  let config = {
    headers: {
      accept: 'application/json',
    },
  };
  const getQuote = () => {
    axios.get('https://quotes.rest/qod?language=en', config).then(
      (response) => {
        console.log(response);
        let content = response.data.contents.quotes[0];
        setQuote(content.quote);
        setAuthor(content.author);
      },
      (error) => console.log(error)
    );
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className={classes.quoteBox}>
      <Typography variant="h5"> Quote of the day: </Typography>
      <Typography className={classes.quote}> "{quote}" </Typography>
      <Typography className={classes.author} align="right">
        - {author}
      </Typography>
    </div>
  );
}

export default Quote;
