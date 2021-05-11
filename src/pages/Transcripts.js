import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
// import transcript from '../components/transcripts/transcript.html';

const useStyles = makeStyles(() => ({
  pdf: {
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0,
    minHeight: '50vh',
  },
}));

function Transcripts() {
  const classes = useStyles();

  useEffect(() => {
    console.log('Transcript');
  }, []);

  return (
    <div className={classes.pdf}>
      <h2> Transcript </h2>
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vSgEfLJiadLFS6jXSMz3A78RS7hZ2iUKRIguAyan6gbDwp479JR49ilXD0BXwGZjruA-NtkS7ZIq1Ig/pub"
        height="500"
        width="100%"
      ></iframe>
    </div>
  );
}

export default Transcripts;
