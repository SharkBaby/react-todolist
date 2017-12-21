import React, {Component, PropTypes, createElement} from 'react';
import {Route, Switch,Redirect} from 'react-router-dom'
import HomeContainer from '../Component/HomeContainer'
import LoginContainer from '../Component/LoginContainer'

const Main = () =>(
    <div>
        <Switch>
            <Route  path='/home' component={HomeContainer} />
            <Redirect from="/" to="/home" />
            <Route component={LoginContainer} />
        </Switch>
    </div>
);

export default Main;