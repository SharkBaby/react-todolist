import React, {Component, PropTypes, createElement} from 'react';
import {Route, Switch} from 'react-router-dom'
import MainContainer from '../Component/Main/Container/MainContainer'
import LogIn from '../Component/LogIn'
import TestComponent from '../Component/TestComponent'

const Main = () =>(
    <div>
        <Switch>
            <Route exact path='/' component={LogIn} />
            <Route exact path='/test' component={TestComponent} />
            <Route path='/main' component={MainContainer} />
            <Route component={LogIn} />
        </Switch>
    </div>
);

export default Main;