import React from 'react';
import {Route, Switch ,Redirect} from 'react-router-dom';
import TodolistContainer from '../Todolist/TodolistContainer'
import AboutContainer from '../About/AboutContainer'
import LoginContainer from '../LoginContainer'

const ContentRouter = (props) => (
    <Switch>
        <Route path="/home/todolist" component={TodolistContainer}/>
        <Route path="/home/about" component={AboutContainer}/>
        <Redirect from="/home" to="/home/todolist" />
        <Route component={LoginContainer}/>
    </Switch>
);

export default ContentRouter;