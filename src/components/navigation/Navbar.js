import React from 'react';
import {
  AppBar,
  IconButton,
  Menu,
  Toolbar,
  ListItemText,
  MenuItem,
  makeStyles,
  Tabs,
  Tab,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  styledMenu: {
    border: '1px solid ' + theme.palette.text.secondary,
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
  homeIcon: {
    color: theme.palette.secondary.light,
  },
  tabsContainer: {
    marginLeft: theme.spacing(2),
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
}));

function Navbar() {
  const classes = useStyles();

  const items = {
    aboutMe: {
      index: 1,
      url: '/aboutme',
    },

    projects: {
      index: 2,
      url: '/projects',
    },
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [value, setValue] = React.useState(-1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
        <IconButton
          id="home-button"
          value={value}
          component={Link}
          to="/"
          onClick={handleChange}
        >
          <HomeIcon className={classes.homeIcon} />
        </IconButton>
        <Tabs
          value={value}
          onChange={handleChange}
          className={classes.tabsContainer}
        >
          <Tab component={Link} to={items.aboutMe.url} label="About Me" />
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
            to={items.projects.url}
          >
            <ListItemText primary="Projects" />
          </MenuItem>
          <a
            href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:5134fbdc-899a-4cfe-afa8-b2631eafe8c8"
            target="_blank"
            rel="noreferrer"
            className={classes.a}
          >
            <MenuItem classes={{ selected: classes.selected }}>
              <ListItemText primary="Resume" />
            </MenuItem>
          </a>

          <a
            className={classes.a}
            href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:6b4666e0-9dd2-477e-a0ad-1d46fc6a7062"
            target="_blank"
            rel="noreferrer"
          >
            <MenuItem classes={{ selected: classes.selected }}>
              <ListItemText primary="Transcripts" />
            </MenuItem>
          </a>
        </StyledMenu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
