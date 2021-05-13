import React from 'react';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { Container, Box, makeStyles } from '@material-ui/core';

import Navbar from './components/navigation/Navbar';
import Footer from './components/footer/Footer';

import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Transcripts from './pages/Transcripts';

import theme from './theme.js';
import { ThemeProvider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    padding: 0,
    boxSizing: 'border-box',
    overflowX: 'hidden',
    overflowY: 'hidden',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },

  mainWrap: {
    [theme.breakpoints.down('xs')]: {
      paddingTop: 56,
      paddingBottom: 160,
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
      paddingBottom: 110,
    },
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  contentWrap: {
    margin: 20,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.pageContainer}>
          <Navbar />
          <main className={classes.mainWrap}>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <div className={classes.contentWrap}>
                <Route exact path="/aboutme" component={Aboutme}></Route>
                <Route exact path="/resume" component={Resume}></Route>
                <Route exact path="/projects" component={Projects}></Route>
                <Route
                  exact
                  path="/transcripts"
                  component={Transcripts}
                ></Route>
              </div>
            </Switch>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
