import {
  Grid,
  Paper,
  makeStyles,
  Divider,
  Typography,
} from '@material-ui/core';
import React from 'react';
import Bio from '../components/aboutme/Bio';
import portrait from '../assets/images/aboutme/portrait_1.png';
import book from '../assets/images/aboutme/book.png';

const elevation = 5;

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    height: '100%',
  },
  infoBox: {
    marginTop: theme.spacing(2),
  },
  bookContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  readingBox: {
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // outline: '2px solid ' + theme.palette.text.secondary,
  },
  strong: {
    color: theme.palette.info.main,
  },
  bookImgWrap: {
    marginTop: theme.spacing(2),
  },
  bookImg: {
    minWidth: '60%',
    maxWidth: 100,
  },
  portraitWrap: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  portraitImg: {
    width: '100%',
    maxWidth: 300,
  },
  author: {
    display: 'inline',
    fontSize: '0.9rem',
    fontStyle: 'italic',
  },
  title: {
    display: 'inline',
    fontSize: '0.9rem',
  },
}));

function Aboutme() {
  const classes = useStyles();

  const BioItem = () => (
    <Grid item md={8} sm={12}>
      <Bio />
    </Grid>
  );

  const PortraitItem = () => (
    <Grid item md={4}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={12}>
          <div className={classes.portraitWrap}>
            <img
              className={classes.portraitImg}
              src={portrait}
              alt="evan boerchers"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={12}>
          <Divider />
          <Typography className={classes.infoBox} color="textSecondary">
            <Typography>
              <strong className={classes.strong}>Location:&nbsp; </strong>{' '}
              Calgary, AB
            </Typography>
            <Typography>
              <strong className={classes.strong}> Age:&nbsp; </strong> 23
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  const FactsItem = () => (
    <Grid item xa={12} sm={7} md={8} lg={9}>
      <Divider />
      <div className={classes.infoBox}>
        <Typography color="textSecondary">
          <Typography>
            <strong className={classes.strong}>
              Favourite thing about Engineering? &nbsp;
            </strong>
            Seeing the ideas in my head come into reality.
          </Typography>
          <Typography>
            <strong className={classes.strong}>
              Skills I want to learn? &nbsp;
            </strong>
            I want to learn to code Ruby, speak a second language, and how to
            juggle.
          </Typography>
          <Typography>
            <strong className={classes.strong}>Favourite band? &nbsp;</strong>
            Led Zeppelin.
          </Typography>
          <Typography>
            <strong className={classes.strong}>
              Light or Dark theme? &nbsp;
            </strong>
            Dark all the way.
          </Typography>
        </Typography>
      </div>
    </Grid>
  );

  const ReadingItem = () => (
    <Grid item xs={12} sm={5} md={4} lg={3}>
      <div className={classes.readingBox}>
        <Typography color="textSecondary">
          <Typography>
            <strong>What im Reading...</strong>
          </Typography>
          <div className={classes.bookContainer}>
            <div className={classes.bookImgWrap}>
              <img src={book} className={classes.bookImg} alt="book" />
            </div>
            <Typography className={classes.title}>
              Crime and Punishment
            </Typography>
            <Typography className={classes.author}>
              Fyodor Dostoevsky
            </Typography>
          </div>
        </Typography>
      </div>
    </Grid>
  );

  return (
    <Paper className={classes.paper} elevation={elevation}>
      <Grid container spacing={2}>
        <BioItem />
        <PortraitItem />
        <ReadingItem />
        <FactsItem />
      </Grid>
    </Paper>
  );
}

export default Aboutme;
