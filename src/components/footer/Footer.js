import React from 'react';
import { Box, Grid, makeStyles, Typography, Paper } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  footerBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    margin: 0,
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(1),
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      height: 150,
    },
    [theme.breakpoints.up('sm')]: {
      height: 100,
    },
    backgroundColor: theme.palette.primary.main,
    borderTop: theme.spacing(0.5) + 'px solid ' + theme.palette.secondary.main,
    color: theme.palette.text.secondary,
    justifyContent: 'center',
    display: 'flex',
  },
  contactBox: {
    justifyContent: 'right',
    padding: 5,
  },
  linksBox: {
    justifyContent: 'right',
  },
  titleBox: {
    textAlign: 'center',
    borderBottom: '2px solid ' + theme.palette.text.secondary,
    marginBottom: 10,
  },
  icon: {
    fontSize: 40,
  },
  iconSpan: {
    marginLeft: 20,
  },
  contentContainer: {
    maxWidth: 500,
  },
  a: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <Paper elevation={20} className={classes.footerBox}>
      <Grid
        container
        alignItems="center"
        align="center"
        className={classes.contentContainer}
      >
        <Grid item xs={12}>
          <Box className={classes.titleBox}>
            <Typography variant="h6">Contact</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className={classes.contactBox}>
            <Grid container>
              <Grid item xs={12}>
                <Typography>
                  <strong>Email: &nbsp;eboerchers@yahoo.ca</strong>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <strong>Phone: &nbsp; (403) 461-9531</strong>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className={classes.linksBox}>
            <a
              className={classes.a}
              href="https://www.linkedin.com/in/evan-boerchers/"
              target="_blank"
            >
              <LinkedInIcon className={classes.icon} />
            </a>
            <span className={classes.iconSpan} />
            <a
              className={classes.a}
              href="https://github.com/evankboerchers"
              target="_blank"
            >
              <GitHubIcon className={classes.icon} />
            </a>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Footer;
