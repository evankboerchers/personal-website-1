import React from 'react';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { makeStyles, Box } from '@material-ui/core';

import Navbar from './components/navigation/Navbar';
import Footer from './components/footer/Footer';

import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Resume from './pages/Resume';
import Projects from './pages/Projects';

import theme from './theme.js';
import { ThemeProvider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },

  mainWrap: {
    [theme.breakpoints.down('xs')]: {
      paddingTop: 56,
      paddingBottom: 150 + theme.spacing(3.5),
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
      paddingBottom: 100 + theme.spacing(3.5),
    },

    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
  },
  contentWrap: {
    maxWidth: 1366,
    margin: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box
          className={classes.pageContainer}
          bgcolor={theme.palette.background.default}
        >
          <Navbar />
          <main className={classes.mainWrap}>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <div className={classes.contentWrap}>
                <Route exact path="/aboutme" component={Aboutme}></Route>
                <Route exact path="/projects" component={Projects}></Route>
                <Route exact path="/resume" component={Resume}></Route>
              </div>
            </Switch>
          </main>
          <footer>
            <Footer />
          </footer>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
