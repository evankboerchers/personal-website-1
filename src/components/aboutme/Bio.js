import { Divider, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  bioContainer: {
    alignItems: 'left',
  },
  bioText: {
    justify: 'left',
  },
  divider: {
    borderBottom: 'inherit',
  },
}));

function Bio() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" color="textSecondary">
        Evan Boerchers
      </Typography>
      <hr className={classes.divider} />

      <Typography className={classes.bioText}>
        <p>
          Hi, I am Evan and I made this website for two reasons. One, I wanted
          to provide a central resource to market myself to the world and, two,
          I have a passion for all things design and building my own website
          seemed like a natural choice.
        </p>
        <p>
          Being a graduate of Mechanical Engineering, I always had a passion for
          computers and software technology. For this reason I decided to pivot
          and pursue a Master of Engineering in Software. As a fresh grad I am
          eager to find a meaningful career
        </p>
        <p>
          When I'm not at my computer you can probably find me playing drums,
          reading a good book, having a drink with friends or if lucky, cooking
          up something tasty in the kitchen.
        </p>
        <Typography variant="h6" color="textSecondary">
          My Experience
          <Divider />
        </Typography>
        <p>
          In my past as a Mechanical Engineer I have done alot of design work
          particularly using CAD software like SolidWorks. It is during this
          time that I aqquired my passion for design and innovative problem
          solving. Some of my past work can be seen on my{' '}
          <Link to="/mechanicalportfolio">mechanical porfolio page</Link>.
        </p>
        <p>
          Despite being relatively new to the software space I have learned a
          lot over the past year. The projects I have worked on can be found on
          my <Link to="/softwareprojects">software projects page</Link>.
        </p>
        <p>
          I am extremely confident in my ability to learn fast and I don't have
          any problems picking up new technologies and skills.
        </p>
        <Typography variant="h6" color="textSecondary">
          My Goal
          <Divider />
        </Typography>
        <p>
          Ultimately I want to find a meaningful career as either a Software
          Developer or as a Mechanical Design Engineer.
        </p>
        <p>
          From a software perspective I am interested in both front-end and
          back-end design, meaning that I hope to be able to work as a
          full-stack developer at some point in the future. On the Mechanical
          side of things I would be interested in a job that allows me to tackle
          both mechanical design problems while exercising some of my software
          skills. I particularly enjoy working with CAD in conjuction with other
          software tools.
        </p>
        <p>
          I am currently looking for oppurtunities, and I am willing to relocate
          for work. I am a US and Canadian citizen which should aid in any
          relocation. Please feel free to contact me if you have a position
          available!
        </p>
      </Typography>
    </div>
  );
}

export default Bio;
