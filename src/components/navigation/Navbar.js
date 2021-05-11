import React from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  Toolbar,
  Typography,
  ListItemText,
  MenuItem,
  Icon,
  makeStyles,
  Tabs,
  Tab,
} from '@material-ui/core';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom';
import LogoIcon from './EKB-logo.svg';

const useStyles = makeStyles((theme) => ({
  styledMenu: {
    border: '1px solid #d3d4d5',
    backgroundColor: theme.palette.background.default,
  },
  logoImage: {
    maxWidth: '150%',
    maxHeight: '150%',
  },
  selected: {
    backgroundColor: theme.palette.secondary.main + '!important',
    borderTop: '1px solid' + theme.palette.secondary.light,
    borderBottom: '1px solid' + theme.palette.secondary.light,
  },
  homeButtonContainer: {},
  tabsContainer: {},
  contactButtonContainer: {
    justifyItems: 'center',
  },
}));

function Navbar() {
  const classes = useStyles();

  const items = {
    aboutMe: {
      index: 1,
      url: '/aboutme',
    },
    resume: {
      index: 2,
      url: '/resume',
    },
    projects: {
      index: 3,
      url: '/projects',
    },
    transcripts: {
      index: 4,
      url: '/transcripts',
    },
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [value, setValue] = React.useState(0);

  const [selected, setSelected] = React.useState(-1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const updateSelected = (index) => {
    setSelected(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledMenu = (props) => (
    <Menu
      classes={{ paper: classes.styledMenu }}
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  );

  return (
    <AppBar position="fixed">
      <Toolbar>
        <div>
          <IconButton id="home-button" component={Link} to="/">
            <Icon>
              <div>
                <img
                  className={classes.logoImage}
                  alt="home logo"
                  src={LogoIcon}
                />
              </div>
            </Icon>
          </IconButton>
        </div>
        <Tabs value={value} onChange={handleChange}>
          <Tab
            component={Link}
            to={items.aboutMe.url}
            onClick={() => updateSelected(items.aboutMe.url)}
            label="About Me"
          />
          <Tab label="Portfolio" onClick={handleClick} />
        </Tabs>
        <StyledMenu
          id="portfolio-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            classes={{ selected: classes.selected }}
            component={Link}
            to={items.resume.url}
            selected={selected === items.resume.index}
            onClick={() => updateSelected(items.resume.index)}
          >
            <ListItemText primary="Resume" />
          </MenuItem>
          <MenuItem
            classes={{ selected: classes.selected }}
            component={Link}
            to={items.projects.url}
            selected={selected === items.projects.index}
            onClick={() => updateSelected(items.projects.index)}
          >
            <ListItemText primary="Projects" />
          </MenuItem>
          <MenuItem
            classes={{ selected: classes.selected }}
            component={Link}
            to={items.transcripts.url}
            selected={selected === items.transcripts.index}
            onClick={() => updateSelected(items.transcripts.index)}
          >
            <ListItemText primary="Transcripts" />
          </MenuItem>
        </StyledMenu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
