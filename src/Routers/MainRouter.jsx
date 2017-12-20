import React, {Component, PropTypes, createElement} from 'react';
import {Route, Switch,Redirect} from 'react-router-dom'
import MainContainer from '../Component/MainContainer'
import LoginContainer from '../Component/LoginContainer'

const Main = () =>(
    <div>
        <Switch>
            <Route  path='/main' component={MainContainer} />
            <Redirect from="/" to="/main" />
            <Route component={LoginContainer} />
        </Switch>
    </div>
);

export default Main;