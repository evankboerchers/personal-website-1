import { makeStyles, Typography } from '@material-ui/core';
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
          seemed like a natural choice. As a graduate with a bachelor in
          mechanical engineering I decided to combine my passion for design with
          my love of computers and obtain a masters of engineering in software.
          With these two distinctions under my belt I am currently pursuing
          career opportunities, with the goal of finding meaningful career as a
          software developer
        </p>
        <p>
          When i'm not at my computer you can probably find me playing drums,
          reading a good book, having a drink with friends or if lucky, cooking
          up something tasty in the kitchen.
        </p>
        <p>
          Despite loving the Calgary area I am open to relocate and I hope to
          get the chance to explore some more of the world and see what it has
          to offer!
        </p>
      </Typography>
    </div>
  );
}

export default Bio;
