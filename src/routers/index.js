import React from 'react';
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom'
import Detail from '../components/detail'
import Home from '../components/home'


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/detail" component={Detail}/>
        </Switch>
    </HashRouter>
)

export default BasicRoute