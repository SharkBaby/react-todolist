import React, {Component, PropTypes, createElement,Fragment} from 'react';
import {Route, Switch,Redirect,BrowserRouter} from 'react-router-dom'
import Layout from '../Layouts/Layout'

const MainRouter = () =>(
    <BrowserRouter>
        <Fragment>
            <Switch>
                <Route  path='/home' component={Layout} />
                <Redirect from="/" to="/home" />
            </Switch>
        </Fragment>
    </BrowserRouter>
);

export default MainRouter;