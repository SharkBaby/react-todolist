import React, {Component, PropTypes, createElement} from 'react';
import {Route, Switch,Redirect,BrowserRouter} from 'react-router-dom'
import HomeContainer from '../Component/Home/HomeContainer'
import LoginContainer from '../Component/LoginContainer'

const MainRouter = () =>(
    <BrowserRouter>
        <div>
            <Switch>
                <Route  path='/home' component={HomeContainer} />
                <Redirect from="/" to="/home" />
                <Route component={LoginContainer} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default MainRouter;