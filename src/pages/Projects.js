import {
  Paper,
  Typography,
  makeStyles,
  Divider,
  Grid,
  Hidden,
} from '@material-ui/core';
import React from 'react';

import PersonalWebsiteImg from '../assets/images/projects/personal_website.png';
import SpringFrameworkImg from '../assets/images/projects/spring_framework.png';
import PlantDiseaseImg from '../assets/images/projects/plant_disease.png';
import CourseOutlineImg from '../assets/images/projects/course_outline.png';
import ReadmeClassificationImg from '../assets/images/projects/readme_classification.png';
import SortingVisualizationImg from '../assets/images/projects/sorting-visualization.png';
import VendingImg from '../assets/images/projects/virtual-vending-machine.png';

const elevation = 5;

const useStyles = makeStyles((theme) => ({
  titlePaper: {
    padding: theme.spacing(3),
  },
  projectPaper: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
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
    color: theme.palette.info.main,
  },
  spaceBottom: {
    marginBottom: theme.spacing(0.5),
  },
  descriptor: {
    display: 'inline',
    fontSize: '0.8rem',
  },
}));

function Projects() {
  const classes = useStyles();

  const PersonalWebsite = () => (
    <Paper className={classes.projectPaper} elevation={elevation}>
      <Typography variant="h6" color="textSecondary">
        Personal Website
      </Typography>
      <Divider className={classes.titleDiv} />
      <Grid container>
        <Grid item sm={8}>
          <Typography className={classes.spaceBottom}>
            <a
              href="https://github.com/evankboerchers/personal-website-1"
              target="_blank"
              rel="noreferrer"
            >
              Github Repository
            </a>
          </Typography>
          <Typography className={classes.spaceBottom}>
            <strong className={classes.strong}> Description: </strong>
            This project is self-explanatory, it is simply the website you are
            currently viewing. I built this website from scratch using native
            React with Javascript, HTML, CSS and Material-ui to help with
            providing some functional components.
          </Typography>
          <Typography className={classes.spaceBottom}>
            <strong className={classes.strong}> Topics: </strong>
            Frontend, Web Design
          </Typography>
          <Typography>
            <strong className={classes.strong}>Skills: </strong> React.js,
            Javascript, HTML, CSS, Material-ui, Netlify, Axios, Github
          </Typography>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={4}>
            <div className={classes.imgWrap}>
              <img
                className={classes.img}
                src={PersonalWebsiteImg}
                alt="react logo"
              />
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </Paper>
  );

  const SpringFrameworkEvaluation = () => (
    <Paper className={classes.projectPaper} elevation={elevation}>
      <Typography variant="h6" color="textSecondary">
        Spring Framework Evaluation
      </Typography>
      <Divider className={classes.titleDiv} />
      <Grid container>
        <Grid item sm={8}>
          <Typography className={classes.spaceBottom}>
            <a
              href="https://github.com/evankboerchers/SpringChicken"
              target="_blank"
              rel="noreferrer"
            >
              Github Repository
            </a>
          </Typography>
          <Typography className={classes.spaceBottom}>
            <strong className={classes.strong}> Description: </strong>
            This project was my Capstone project for my Masters in Software
            Engineering. This project was done in conjunction with our sponsor
            Pason Systems who wanted to evaluate the viability of Java
            frameworks for their web service. Our findings aswell as our demo
            service served as a test for our sponsors to determine if this
            framework would be a viable option for them.
            <strong> Our codebase includes:</strong>
            <ul>
              <li>Controllers to handle api requests </li>
              <li>Authorization token security </li>
              <li>Demo test suites for web layer/ data layer testing</li>
              <li>Docker containers for mySQL(database) and Redis(caching)</li>
              <li>JPA data layer</li>
              <li>And more!</li>
            </ul>
          </Typography>
          <Typography className={classes.spaceBottom}>
            <strong className={classes.strong}> Topics: </strong>
            Backend, API design, Authorization, Data Persistence, Multi-layer
            Architecture, Testing, Method Caching, Testing
          </Typography>
          <Typography className={classes.spaceBottom}>
            <strong className={classes.strong}>Skills: </strong> Java, Gradle,
            Spring, Docker, mySQL, JPA, JDBC, Junit, Mockito, Github, Agile
            Development
          </Typography>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={4}>
            <div className={classes.imgWrap}>
              <img
                className={classes.img}
                src={SpringFrameworkImg}
                alt="spring logo"
              />
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </Paper>
  );

  const PlantDiseaseCNN = () => (
    <Paper className={classes.projectPaper} elevation={elevation}>
      <Typography variant="h6" color="textSecondary">
        Plant Disease Image Classification
      </Typography>
      <Divider className={classes.titleDiv} />
      <Grid container>
        <Grid item sm={8}>
          <Typography className={classes.spaceBottom}>
            <a
              href="https://github.com/thelisazhao/ENEL645_PlantDiseaseDetection"
              target="_blank"
              rel="noreferrer"
            >
              Github Repository
            </a>
          </Typography>
          <Typography className={classes.spaceBottom}>
            <strong className={classes.strong}> Description: </strong>
            This project is inspired by a Kaggle challenge. Using Convolutional
            Neural Networks we were able to classify potato, tomato and bell
            pepper plants leafs into healthy or diseased categories. Using the
            Tensorflow library a classification accuracy of 99% percent was
            achieved in classifying the plant disease for each plant type in the
            Kaggle dataset. Potential uses for this project would be the
            development of disease detection software.
          </Typography>
          <Typography className={classes.spaceBottom}>
            <strong className={classes.strong}> Topics: </strong>
            Machine Learning, Image Classification, Deep Learning, Neural
            Networks, CNN
          </Typography>
          <Typography className={classes.spaceBottom}>
            <strong className={classes.strong}>Skills: </strong> Python,
            Tensorflow, Jupyter Notebooks
          </Typography>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={4}>
            <div className={classes.imgWrap}>
              <img
                className={classes.img}
                src={PlantDiseaseImg}
                alt="tensorflow logo"
              />
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </Paper>
  );

  const CourseOutlineBuilder = () => (
    <Paper className={classes.projectPaper} elevation={elevation}>
      <Typography variant="h6" color="textSecondary">
        Course Outline Builder
      </Typography>
      <Divider className={classes.titleDiv} />
      <Grid container>
        <Grid item sm={8}>
          <Typography className={classes.spaceBottom}>
            <a
              href="https://github.com/deanjhkim/ENSF-607-Web-Development-Project"
              target="_blank"
              rel="noreferrer"
            >
              Github Repository
            </a>
          </Typography>
          <Typography className={classes.spaceBottom}>
            <strong className={classes.strong}> Description: </strong>
            This project was a very early stage concept for a course outline
            builder than could be used to build and save course outlines at the
            University of Calgary. Included is a frontend React website that
            connects to a backend Django server which serves as the api to get
            and post all information.
          </Typography>
          <Typography className={classes.spaceBottom}>
            <strong className={classes.strong}> Topics: </strong>
            Full-Stack, Web Design, Api Design
          </Typography>
          <Typography className={classes.spaceBottom}>
            <strong className={classes.strong}>Skills: </strong> Javascript,
            HTML, CSS, React.js, Python, Django, SQLite, Axios, Github
          </Typography>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={4}>
            <div className={classes.imgWrap}>
              <img
                className={classes.img}
                src={CourseOutlineImg}
                alt="django/python logo"
              />
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </Paper>
  );

  const ClassificationOfReadme = () => (
    <Paper className={classes.projectPaper} elevation={elevation}>
      <Typography variant="h6" color="textSecondary">
        Classification of Github README Sections
      </Typography>
      <Divider className={classes.titleDiv} />
      <Grid container>
        <Grid item sm={8}>
          <Typography className={classes.spaceBottom}>
            <a
              href="https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/4985770712986055/1653466948958185/3712725817297160/latest.html"
              target="_blank"
              rel="noreferrer"
            >
              Databricks Notebook
            </a>
            <div className={classes.descriptor}>
              {' '}
              - Data processing, analysis, model training/predictions
            </div>
          </Typography>
          <Typography className={classes.spaceBottom}>
            <a
              href="https://github.com/evankboerchers/Classification-of-Github-READMES"
              target="_blank"
              rel="noreferrer"
            >
              Github Repository
            </a>
            <div className={classes.descriptor}>
              {' '}
              - README files and data extraction scripts
            </div>
          </Typography>

          <Typography className={classes.spaceBottom}>
            <strong className={classes.strong}> Description: </strong>
            In this project we tasked ourselves with classifying Github README
            sections into either 'how' or 'not how' based on the sections
            contents. To do this we first manually gathered random README's from
            Github and using a python script divided them into sections. These
            sections were then manual labeled. With PySpark the section data and
            labels were used to train various machine learning models. The best
            model achieved an accuracy of 87% for its predictions on new README
            files.
          </Typography>
          <Typography className={classes.spaceBottom}>
            <strong className={classes.strong}> Topics: </strong>
            Machine Learning, Big Data, Data Extraction, Model Tuning, Data
            Analytics
          </Typography>
          <Typography className={classes.spaceBottom}>
            <strong className={classes.strong}>Skills: </strong> Python,
            PySpark, Pandas, Databricks
          </Typography>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={4}>
            <div className={classes.imgWrap}>
              <img
                className={classes.img}
                src={ReadmeClassificationImg}
                alt="pyspark logo"
              />
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </Paper>
  );

  const SortingVisualization = () => (
    <Paper className={classes.projectPaper} elevation={elevation}>
      <Typography variant="h6" color="textSecondary">
        Sorting Algorithm Visualizer
      </Typography>
      <Divider className={classes.titleDiv} />
      <Grid container>
        <Grid item sm={8}>
          <Typography className={classes.spaceBottom}>
            <a
              href="https://evankboerchers.github.io/sorting-visualization/"
              target="_blank"
              rel="noreferrer"
            >
              Webpage
            </a>
          </Typography>
          <Typography className={classes.spaceBottom}>
            <a
              href="https://github.com/evankboerchers/sorting-visualization"
              target="_blank"
              rel="noreferrer"
            >
              Github Repository
            </a>
          </Typography>

          <Typography className={classes.spaceBottom}>
            <strong className={classes.strong}> Description: </strong>A webpage
            that allows the user to visualize various sorting algorithms. User
            can select different sorting methods, array sizes and sort speeds.
            Upon clicking the 'sort' button the user is shown an animation of
            the sorting algorithm as it goes through the required steps until
            the array is completely sorted. All sorting algorithms were written
            and animated using Javascript, HTML and CSS.
          </Typography>
          <Typography className={classes.spaceBottom}>
            <strong className={classes.strong}> Topics: </strong>
            Sorting Algorithms, GUI design, Frontend, Animation
          </Typography>
          <Typography className={classes.spaceBottom}>
            <strong className={classes.strong}>Skills: </strong> Algorithms,
            React, JavaScript, HTML, CSS, Git Pages
          </Typography>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={4}>
            <div className={classes.imgWrap}>
              <img
                className={classes.img}
                src={SortingVisualizationImg}
                alt="javascript logo"
              />
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </Paper>
  );

  const VirtualVendingMachine = () => (
    <Paper className={classes.projectPaper} elevation={elevation}>
      <Typography variant="h6" color="textSecondary">
        Virtual Vending Machine
      </Typography>
      <Divider className={classes.titleDiv} />
      <Grid container>
        <Grid item sm={8}>
          <Typography className={classes.spaceBottom}>
            <a
              href="https://evankboerchers.github.io/virtual-vending-machine/"
              target="_blank"
              rel="noreferrer"
            >
              Webpage
            </a>
          </Typography>
          <Typography className={classes.spaceBottom}>
            <a
              href="https://github.com/evankboerchers/virtual-vending-machine"
              target="_blank"
              rel="noreferrer"
            >
              Github Repository
            </a>
          </Typography>

          <Typography className={classes.spaceBottom}>
            <strong className={classes.strong}> Description: </strong>A simple
            webpage that acts as a virtual command console to a vending machine.
            Demonstrates a basic GUI application powered by JavaScript logic
          </Typography>
          <Typography className={classes.spaceBottom}>
            <strong className={classes.strong}> Topics: </strong>
            GUI design, Frontend
          </Typography>
          <Typography className={classes.spaceBottom}>
            <strong className={classes.strong}>Skills: </strong> JavaScript,
            HTML, CSS, Git Pages
          </Typography>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={4}>
            <div className={classes.imgWrap}>
              <img
                className={classes.img}
                src={VendingImg}
                alt="javascript logo"
              />
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </Paper>
  );

  return (
    <div>
      <Paper className={classes.titlePaper} elevation={5}>
        <Typography variant="h4" color="textSecondary">
          Projects
        </Typography>
        <Divider className={classes.titleDiv} />
        <Typography>
          Experience matters, here are some of the projects I have worked on
          over the last year. These are not the only projects I have worked on
          but they are noteworthy and cover various topics.
        </Typography>
      </Paper>
      <PersonalWebsite />
      <SortingVisualization />
      <SpringFrameworkEvaluation />
      <VirtualVendingMachine />
      <PlantDiseaseCNN />
      <CourseOutlineBuilder />
      <ClassificationOfReadme />
    </div>
  );
}

export default Projects;
