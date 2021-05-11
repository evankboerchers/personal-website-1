import React from 'react';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  footerBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    margin: 0,
    padding: 0,
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    borderTop: '4px solid ' + theme.palette.secondary.main,
    color: 'white',
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
    borderBottom: '2px solid white',
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
    <Box className={classes.footerBox}>
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
                <Typography>Email: eboerchers@yahoo.ca</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>Phone: 403-461-9531</Typography>
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
    </Box>
  );
}

export default Footer;
