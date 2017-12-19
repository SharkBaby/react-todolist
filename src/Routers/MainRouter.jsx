import React, {Component, PropTypes, createElement} from 'react';
import {Route, Switch} from 'react-router-dom'
import MainContainer from '../Component/MainContainer'
import LoginContainer from '../Component/LoginContainer'

const Main = () =>(
    <div>
        <Switch>
            <Route  exact path='/' component={MainContainer} />
            <Route  path='/main' component={MainContainer} />
            <Route component={LoginContainer} />
        </Switch>
    </div>
);

export default Main;