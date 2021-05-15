import React from 'react';
import {
  AppBar,
  IconButton,
  Menu,
  Toolbar,
  ListItemText,
  MenuItem,
  Icon,
  makeStyles,
  Tabs,
  Tab,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import Home from '@material-ui/icons/Home';

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

  const [value, setValue] = React.useState(0);

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
          <a href="" className={classes.a}>
            <MenuItem classes={{ selected: classes.selected }}>
              <ListItemText primary="Resume" />
            </MenuItem>
          </a>

          <a
            className={classes.a}
            href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:e0cb3ccd-298f-4d80-9594-1bbeb7d72a9b"
            target="_blank"
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
