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
          and pursue a Master of Engineering in Software. With this accredition
          under my belt I hope to start a career in the Software industry.
        </p>
        <p>
          When i'm not at my computer you can probably find me playing drums,
          reading a good book, having a drink with friends or if lucky, cooking
          up something tasty in the kitchen.
        </p>
        <Typography variant="h6" color="textSecondary">
          My Experience
          <Divider />
        </Typography>
        <p>
          Despite being relatively new to the software space I have learned lots
          over the past year. The projects I have worked on over the past year
          can be found on my <Link to="/projects">projects page</Link>.
        </p>
        <p>
          I am extremely confident in my ability to learn fast and I dont have
          any problems picking up new technologies and skills.
        </p>
        <Typography variant="h6" color="textSecondary">
          My Goal
          <Divider />
        </Typography>
        <p>
          Ultimately I want to find a meaningful career as a software engineer.
          I am intersted in both frontend and backend design, meaning that I
          hope to be able to work as a full-stack developer at somepoint in the
          future. I am currently looking for oppurtunities, and am willing to
          relocate for work. I am a US and Canadian citizen which should aid in
          any relocation. Please feel free to contact me if you have a position
          available!
        </p>
      </Typography>
    </div>
  );
}

export default Bio;
