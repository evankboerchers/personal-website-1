import { Paper, Typography, makeStyles, Divider } from '@material-ui/core';
import React from 'react';

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

function MechanicalPortfolio() {
  const classes = useStyles();

  const WarriorRig = () => (
    <Paper className={classes.projectPaper} elevation={elevation}>
      <Typography variant="h6" color="textSecondary">
        Drafting/Design - Warrior Rig Technologies
      </Typography>
      <Divider className={classes.titleDiv} />
      <Typography className={classes.spaceBottom}>
        <a
          href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:863811e4-36cd-4265-adff-6f4a75dfb5fe"
          target="_blank"
          rel="noreferrer"
        >
          Technical Drawing
        </a>
        <div className={classes.descriptor}>
          {' '}
          - Sample drawing of a component I drafted and helped design/analyze.
        </div>
      </Typography>
      <Typography className={classes.spaceBottom}>
        <strong className={classes.strong}> Description: </strong>
        At Warrior I had many responsibilites. Unfortunately, I was only able to
        obtain a sample drawing of mine. This drawing is of a critical power
        transmission component. This component was worked on by multiple
        engineers within the team. I assisted with modeling and FEA analysis,
        additionally I drafted the technical drawing that is provided.
      </Typography>
      <Typography>
        <strong className={classes.strong}>Skills: </strong>
        CAD(SolidWorks), Technical Drawing, Technical Standards, FEA
      </Typography>
    </Paper>
  );

  const WireBundlingMachine = () => (
    <Paper className={classes.projectPaper} elevation={elevation}>
      <Typography variant="h6" color="textSecondary">
        Wire Bundling Machine - Capstone Project
      </Typography>
      <Divider className={classes.titleDiv} />
      <Typography className={classes.spaceBottom}>
        <a
          href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:54d9a577-38d0-4bad-ae34-69789114de59"
          target="_blank"
          rel="noreferrer"
        >
          Final Report
        </a>
        <div className={classes.descriptor}>
          {' '}
          - PDF Final Report for this project
        </div>
      </Typography>
      <Typography className={classes.spaceBottom}>
        <a
          href="https://www.youtube.com/watch?v=KsxADPqmqrs&list=PLN8sitZWBFzMX7vpePwDFbaUGiPKNGw82"
          target="_blank"
          rel="noreferrer"
        >
          Machine Animations Playlist
        </a>
        <div className={classes.descriptor}>
          {' '}
          - Youtube playlist showing machine functionality through CAD
        </div>
      </Typography>
      <Typography className={classes.spaceBottom}>
        <a
          href="https://drive.google.com/file/d/1UUdfaL7EFLjgMdNozJWA77awv_Y3ZyS6/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          CAD Files
        </a>
        <div className={classes.descriptor}>
          {' '}
          - The SolidWorks models and assemblies
        </div>
      </Typography>
      <Typography className={classes.spaceBottom}>
        <strong className={classes.strong}> Description: </strong>
        This project was done for Teledyne Communications. Essentially, Teledyne
        was looking to automate the process of bundling wire into a very
        specific configuration. Me and a team of 4 other studens were tasked
        with conceptualizing and designing a machine that would perform this
        task. Over the span of 8 months we were able to conceptualize, design,
        model and begin prototyping our machine. Our design was delivered to
        Teledyne at the end of this period.
      </Typography>
      <Typography>
        <strong className={classes.strong}>Skills: </strong>
        CAD(SolidWorks), Design, Fabrication, Prototyping, Testing, Report
        Writing
      </Typography>
    </Paper>
  );

  const SteeringKnuckle = () => (
    <Paper className={classes.projectPaper} elevation={elevation}>
      <Typography variant="h6" color="textSecondary">
        Steering Knuckle Design and Fabrication - Schulich Off-Road
      </Typography>
      <Divider className={classes.titleDiv} />
      <Typography className={classes.spaceBottom}>
        <a
          href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:dfdfd64d-7711-4a64-98f6-5d0794582077"
          target="_blank"
          rel="noreferrer"
        >
          Technical Drawing
        </a>
        <div className={classes.descriptor}> - Drawing of steering knuckle</div>
      </Typography>
      <Typography className={classes.spaceBottom}>
        <a
          href="https://www.youtube.com/watch?v=KsxADPqmqrs&list=PLN8sitZWBFzMX7vpePwDFbaUGiPKNGw82"
          target="_blank"
          rel="noreferrer"
        >
          CAD Files/FEA Studies
        </a>
        <div className={classes.descriptor}>
          {' '}
          - Solidworks models and assemblies aswell as FEA studies
        </div>
      </Typography>
      <Typography className={classes.spaceBottom}>
        <strong className={classes.strong}> Description: </strong>
        This project was done as a part of the Schulich Off-Road team in 2019.
        At this time I was project lead and designer of the vehicles steering
        knuckle. The steering knuckle is a critical structural piece that must
        be able to withstand tire loads. Additionally it also must be designed
        to accomadate all desired steering and suspension
        characteristics/geometry. I was able to design a knuckle that achieved
        the desired geometry and characteristics while being able to withstand
        all loading. The end product was 15% lighter than the prior year which
        was a massive achievement. FEA analysis was a critical part of achieving
        this weight reduction.
      </Typography>
      <Typography>
        <strong className={classes.strong}>Skills: </strong>
        CAD(SolidWorks), FEA, Design, Fabrication, Testing.
      </Typography>
    </Paper>
  );

  return (
    <div>
      <Paper className={classes.titlePaper} elevation={5}>
        <Typography variant="h4" color="textSecondary">
          Mechanical Portfolio
        </Typography>
        <Divider className={classes.titleDiv} />
        <Typography>
          Here are a few noteworthy items that demonstrate some of my experience
          and work as a mechanical engineer.
        </Typography>
      </Paper>
      <WarriorRig />
      <WireBundlingMachine />
      <SteeringKnuckle />
    </div>
  );
}

export default MechanicalPortfolio;
