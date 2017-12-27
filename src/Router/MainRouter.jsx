import React, {Component, PropTypes, createElement} from 'react';
import {Route, Switch,Redirect,BrowserRouter} from 'react-router-dom'
import Layout from '../Layouts/Layout'

const MainRouter = () =>(
    <BrowserRouter>
        <div>
            <Switch>
                <Route  path='/home' component={Layout} />
                <Redirect from="/" to="/home" />
            </Switch>
        </div>
    </BrowserRouter>
);

export default MainRouter;