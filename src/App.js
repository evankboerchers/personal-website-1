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

const useStyles = makeStyles(() => ({
  pageContainer: {
    position: 'relative',
    minHeight: '100vh',
  },

  contentWrap: {
    paddingTop: 64,
    paddingBottom: '2.5rem',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <span className={classes.appBarWrap}></span>
        <div className={classes.pageContainer}>
          <main>
            <div className={classes.contentWrap}>
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/aboutme" component={Aboutme}></Route>
                <Route exact path="/resume" component={Resume}></Route>
                <Route exact path="/projects" component={Projects}></Route>
                <Route
                  exact
                  path="/transcripts"
                  component={Transcripts}
                ></Route>
              </Switch>
            </div>
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
