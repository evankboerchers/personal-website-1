import {
  Grid,
  Box,
  Paper,
  makeStyles,
  Divider,
  Typography,
} from '@material-ui/core';
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
      <Grid container>
        <Grid item xs={8}>
          <Paper className={classes.bioPaper} elevation={elevation}>
            <Bio />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <Paper elevation={elevation}>
              <Portrait />
              <Divider />
              <div>
                <Typography>
                  <strong>Location: </strong> Calgary, AB
                </Typography>
                <Typography>
                  <strong> Age: </strong> 23
                </Typography>
              </div>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Aboutme;
