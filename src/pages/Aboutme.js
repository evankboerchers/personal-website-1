import { Grid, Box, Paper, makeStyles } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import Bio from '../components/aboutme/Bio';
import Portrait from '../components/aboutme/Portrait';

const elevation = 5;

const useStyles = makeStyles((theme) => ({
  bioPaper: {
    padding: theme.spacing(2),
  },
  portraitPaper: {},
}));

function Aboutme() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={5}>
        <Grid item md={8}>
          <Paper className={classes.bioPaper} elevation={elevation}>
            <Bio />
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Box mt={5} p={2}>
            <Paper elevation={elevation}>
              <Portrait />
            </Paper>
          </Box>
        </Grid>
      </Grid>
      <h1> Test</h1>
      <h1> Test</h1>
    </div>
  );
}

export default Aboutme;
