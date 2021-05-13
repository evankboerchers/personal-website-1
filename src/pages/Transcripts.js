import { makeStyles, Box } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
// import transcript from '../components/transcripts/transcript.html';

const useStyles = makeStyles(() => ({
  transcriptBox: {
    minHeight: '100%',
    height: '100%',
    flexGrow: 3,
  },
}));

function Transcripts() {
  const classes = useStyles();

  useEffect(() => {
    console.log('Transcript');
  }, []);

  return (
    <div className={classes.transcriptBox}>
      <h2> Transcript </h2>
      <iframe
        src="https://drive.google.com/file/d/1kduX6h2OnmnQjsTRhkafrwUc3Nee3B8y/preview"
        width="100%"
        height="100%"
      ></iframe>
      {/* <Box color="secondary"></Box> */}
    </div>
  );
}

export default Transcripts;
