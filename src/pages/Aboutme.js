import { Grid, Box, Paper } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import Bio from '../components/aboutme/Bio';
import Portrait from '../components/aboutme/Portrait';

function Aboutme() {
  useEffect(() => {
    console.log('About Me');
  }, []);

  return (
    <Grid container spacing={5}>
      <Grid item md={8}>
        <Bio />
      </Grid>
      <Grid item md={4}>
        <Box mt={5} p={2}>
          <Portrait />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Aboutme;
