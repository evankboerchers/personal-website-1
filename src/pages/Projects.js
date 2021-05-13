import {
  Paper,
  Typography,
  makeStyles,
  Divider,
  Grid,
  Box,
  Hidden,
  FilledInput,
} from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';

import PersonalWebsiteImg from '../assets/images/projects/personal_website.png';
import SpringFrameworkImg from '../assets/images/projects/spring_framework.png';

const elevation = 5;

const useStyles = makeStyles((theme) => ({
  titlePaper: {
    padding: 20,
  },
  projectPaper: {
    padding: 20,
    marginTop: 20,
  },
  titleDiv: {
    marginTop: 10,
    marginBottom: 10,
  },
  imgWrap: {
    textAlign: 'center',
    margin: 20,
  },
  img: {
    maxHeight: 100,
    maxWidth: '100%',
  },
  strong: {
    color: theme.palette.secondary.main,
  },
}));

function Projects() {
  useEffect(() => {
    console.log('Projects');
  }, []);

  const classes = useStyles();

  const PersonalWebsite = () => (
    <Paper className={classes.projectPaper} elevation={elevation}>
      <Typography variant="h6"> Personal Website</Typography>
      <Divider className={classes.titleDiv} />
      <Grid container>
        <Grid item sm={8}>
          <Typography>
            <a
              href="https://github.com/evankboerchers/personal-website-1"
              target="_blank"
            >
              Github Repository
            </a>
          </Typography>
          <Typography>
            <strong className={classes.strong}> Description: </strong>
            This project is self-explanatory, it is simply the website you are
            currently viewing. To build this website I used React with native
            Javascript, HTML, CSS and Material-ui to help with providing some
            functional components.
          </Typography>
          <Typography>
            <strong className={classes.strong}>Skills: </strong> Javascript,
            HTML, CSS, React, Material-ui, Netify, Github
          </Typography>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={4}>
            <div className={classes.imgWrap}>
              <img className={classes.img} src={PersonalWebsiteImg}></img>
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </Paper>
  );

  const SpringFrameworkEvaluation = () => (
    <Paper className={classes.projectPaper} elevation={elevation}>
      <Typography variant="h6"> Spring Framework Evaluation</Typography>
      <Divider className={classes.titleDiv} />
      <Grid container>
        <Grid item sm={8}>
          <Typography>
            <a
              href="https://github.com/evankboerchers/SpringChicken"
              target="_blank"
            >
              Github Repository
            </a>
          </Typography>
          <Typography>
            <strong className={classes.strong}> Description: </strong>
            This project was my Capstone Project for my Masters in Software
            Engineering. The purpose of this project was to learn the Spring
            framework and design a demo service. This service was presented to
            our project sponsor and was catered to their requirements. Our
            findings aswell as our demo service served as a test for our
            sponsors to determine if this framework would be a viable option for
            them.
          </Typography>
          <Typography>
            <strong className={classes.strong}>Skills: </strong> Java, Spring,
            Docker, mySQL, JPA, JDBC, Github
          </Typography>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={4}>
            <div className={classes.imgWrap}>
              <img className={classes.img} src={SpringFrameworkImg}></img>
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </Paper>
  );

  const PlantDiseaseCNN = () => (
    <Paper className={classes.projectPaper} elevation={elevation}>
      <Typography variant="h6"> Plant Disease Image Classification</Typography>
      <Divider className={classes.titleDiv} />
      <Grid container>
        <Grid item sm={8}>
          <Typography>
            <a
              href="https://github.com/evankboerchers/SpringChicken"
              target="_blank"
            >
              Github Repository
            </a>
          </Typography>
          <Typography>
            <strong className={classes.strong}> Description: </strong>
            This project is inspired by a Kaggle challenge were nueral networks
            are used to classify plantdiseases in plant leafs.
          </Typography>
          <Typography>
            <strong className={classes.strong}>Skills: </strong> Java, Spring,
            Docker, mySQL, JPA, JDBC, Github
          </Typography>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={4}>
            <div className={classes.imgWrap}>
              <img className={classes.img} src={SpringFrameworkImg}></img>
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </Paper>
  );

  return (
    <div>
      <Paper className={classes.titlePaper} elevation={5}>
        <Typography variant="h4">Projects</Typography>
        <Divider className={classes.titleDiv} />
        <Typography>
          Experienced matters, here are some of the projects I have worked on
          over the last year.
        </Typography>
      </Paper>
      <PersonalWebsite />
      <SpringFrameworkEvaluation />
      <PlantDiseaseCNN />
    </div>
  );
}

export default Projects;
