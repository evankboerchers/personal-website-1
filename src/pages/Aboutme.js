import {
  Grid,
  Box,
  Paper,
  makeStyles,
  Divider,
  Typography,
} from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import Bio from '../components/aboutme/Bio';
import portrait from '../assets/images/portrait_1.png';

const elevation = 5;

const useStyles = makeStyles((theme) => ({
  bioPaper: {
    padding: theme.spacing(2),
    height: '100%',
  },
  portraitPaper: {
    padding: theme.spacing(2),
    height: '100%',
  },
}));

function Aboutme() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Paper className={classes.bioPaper} elevation={elevation}>
            <Bio />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <Paper className={classes.portraitPaper} elevation={elevation}>
              <img src={portrait} width="100%" alt="photo of Evan"></img>
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
