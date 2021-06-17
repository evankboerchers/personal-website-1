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

    softwareprojects: {
      index: 2,
      url: '/softwareprojects',
    },

    mechanicalportfolio: {
      index: 3,
      url: '/mechanicalportfolio',
    },
  };

  const [softwareAnchorEl, setSoftwareAnchorEl] = React.useState(null);
  const [mechanicalAnchorEl, setMechanicalAnchorEl] = React.useState(null);

  const [value, setValue] = React.useState(-1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSoftwareClick = (event) => {
    setSoftwareAnchorEl(event.currentTarget);
  };

  const handleSoftwareClose = () => {
    setSoftwareAnchorEl(null);
  };

  const handleMechanicalClick = (event) => {
    setMechanicalAnchorEl(event.currentTarget);
  };

  const handleMechanicalClose = () => {
    setMechanicalAnchorEl(null);
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
          <Tab label="Software Portfolio" onClick={handleSoftwareClick} />
          <Tab label="Mechanical Portfolio" onClick={handleMechanicalClick} />
        </Tabs>

        <StyledMenu
          id="software-portfolio-menu"
          anchorEl={softwareAnchorEl}
          keepMounted
          open={Boolean(softwareAnchorEl)}
          onClose={handleSoftwareClose}
        >
          <MenuItem
            classes={{ selected: classes.selected }}
            component={Link}
            to={items.softwareprojects.url}
          >
            <ListItemText primary="Projects" />
          </MenuItem>
          <a
            href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:9c1c893b-da1f-487f-98d7-2b941b8a04b0"
            target="_blank"
            rel="noreferrer"
            className={classes.a}
          >
            <MenuItem classes={{ selected: classes.selected }}>
              <ListItemText primary="Resume (One-Page)" />
            </MenuItem>
          </a>

          <a
            href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:222fce11-b977-43e6-bdf8-57f4c2ae4896"
            target="_blank"
            rel="noreferrer"
            className={classes.a}
          >
            <MenuItem classes={{ selected: classes.selected }}>
              <ListItemText primary="Resume (Extended)" />
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

        <StyledMenu
          id="mechanical-portfolio-menu"
          anchorEl={mechanicalAnchorEl}
          keepMounted
          open={Boolean(mechanicalAnchorEl)}
          onClose={handleMechanicalClose}
        >
          <MenuItem
            classes={{ selected: classes.selected }}
            component={Link}
            to={items.mechanicalportfolio.url}
          >
            <ListItemText primary="Portfolio" />
          </MenuItem>

          {/* <a href="" target="_blank" rel="noreferrer" className={classes.a}>
            <MenuItem classes={{ selected: classes.selected }}>
              <ListItemText primary="Resume" />
            </MenuItem>
          </a> */}

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
