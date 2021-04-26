import React from 'react';
import { useEffect }  from 'react';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import Home from '../pages/Home';
import Aboutme from '../pages/Aboutme';

function Main() {


    return (
        <div>
            <Router>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/aboutme' component={Aboutme}></Route>
            </Switch>
            </Router>
        </div>
    );
}

export default Main;