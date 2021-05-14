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
import PlantDiseaseImg from '../assets/images/projects/plant_disease.png';
import CourseOutlineImg from '../assets/images/projects/course_outline.png';
import ReadmeClassificationImg from '../assets/images/projects/readme_classification.png';

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
            <strong className={classes.strong}> Topics: </strong>
            Frontend, Web Design
          </Typography>
          <Typography></Typography>
          <Typography>
            <strong className={classes.strong}>Skills: </strong> Javascript,
            HTML, CSS, React, Material-ui, Netify, Axios, Github
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
            <strong className={classes.strong}> Topics: </strong>
            Backend, API design, Authorization, Data Persistence, Multi-layer
            Architecture, Testing, Method Caching
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
              href="https://github.com/thelisazhao/ENEL645_PlantDiseaseDetection"
              target="_blank"
            >
              Github Repository
            </a>
          </Typography>
          <Typography>
            <strong className={classes.strong}> Description: </strong>
            This project is inspired by a Kaggle challenge. Using Convolutional
            Neural Networks we were able to classify potato, tomato and bell
            pepper plants leafs into healthy or diseased categories. Using the
            Tensorflow library a classification accuracy of 99% percent was
            achieved in classifying the plant disease for each plant type.
          </Typography>
          <Typography>
            <strong className={classes.strong}> Topics: </strong>
            Machine Learning, Image Classification, Neural Networks, CNN
          </Typography>
          <Typography>
            <strong className={classes.strong}>Skills: </strong> Python,
            Tensorflow, Jupyter Notebooks
          </Typography>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={4}>
            <div className={classes.imgWrap}>
              <img className={classes.img} src={PlantDiseaseImg}></img>
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </Paper>
  );

  const CourseOutlineBuilder = () => (
    <Paper className={classes.projectPaper} elevation={elevation}>
      <Typography variant="h6"> Course Outline Builder</Typography>
      <Divider className={classes.titleDiv} />
      <Grid container>
        <Grid item sm={8}>
          <Typography>
            <a
              href="https://github.com/thelisazhao/ENEL645_PlantDiseaseDetection"
              target="_blank"
            >
              Github Repository
            </a>
          </Typography>
          <Typography>
            <strong className={classes.strong}> Description: </strong>
            This project was a very early stage concept for a course outline
            builder than could be used to build and save course outlines at the
            University of Calgary. Included is a frontend react website that
            connects to the backend Django server which serves as the api to get
            and post all information.
          </Typography>
          <Typography>
            <strong className={classes.strong}> Topics: </strong>
            Full-Stack, Web Design, Api Design
          </Typography>
          <Typography>
            <strong className={classes.strong}>Skills: </strong> Javascript,
            HTML, CSS, React, Python, Django, Axios, Github
          </Typography>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={4}>
            <div className={classes.imgWrap}>
              <img className={classes.img} src={CourseOutlineImg}></img>
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </Paper>
  );

  const ClassificationOfReadme = () => (
    <Paper className={classes.projectPaper} elevation={elevation}>
      <Typography variant="h6">
        Classification of Github README Sections
      </Typography>
      <Divider className={classes.titleDiv} />
      <Grid container>
        <Grid item sm={8}>
          <Typography>
            <a
              href="https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/4985770712986055/1653466948958185/3712725817297160/latest.html"
              target="_blank"
            >
              Databricks Notebook
            </a>
          </Typography>
          <Typography>
            <a
              href="https://github.com/evankboerchers/ENSF612-Project"
              target="_blank"
            >
              Github Repository
            </a>
            - (only contains helper scripts)
          </Typography>

          <Typography>
            <strong className={classes.strong}> Description: </strong>
            In this project we tasked ourselves with classifying Github README
            sections into either 'how' or 'not how' based on the sections
            contents. To do this we first manually gathered random README's from
            Github and using a python script extracted sections were extracted.
            These sections were then manual labeled. With PySpark the section
            data and labels were used to train various machine learning models
            and predictions on new readme sections were obtained. The best model
            achieved an accuracy of 87% for its predictions.
          </Typography>
          <Typography>
            <strong className={classes.strong}> Topics: </strong>
            Machine Learning, Big Data, Data Extraction, Model Tuning, Data
            Analytics
          </Typography>
          <Typography>
            <strong className={classes.strong}>Skills: </strong> Python,
            PySpark, Pandas, Databricks
          </Typography>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={4}>
            <div className={classes.imgWrap}>
              <img className={classes.img} src={ReadmeClassificationImg}></img>
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
          over the last year. These are not the only projects I have worked on
          but they are noteworthy and cover various topics.
        </Typography>
      </Paper>
      <PersonalWebsite />
      <SpringFrameworkEvaluation />
      <PlantDiseaseCNN />
      <CourseOutlineBuilder />
      <ClassificationOfReadme />
    </div>
  );
}

export default Projects;
