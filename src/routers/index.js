import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Detail from '../components/detail';
import Home from '../components/home';
import Index from '../components/Layout/index';


const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail" component={Detail} />
      <Route exact path="/index" component={Index} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
