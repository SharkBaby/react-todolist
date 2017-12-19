import React from 'react';
import {Route, Switch } from 'react-router-dom';
import TodolistContainer from '../Todolist/TodolistContainer'
import AboutContainer from '../About/AboutContainer'
import LoginContainer from '../LoginContainer'

const ContentRouter = (props) => (
    <Switch>
        <Route exact path="/main/" component={TodolistContainer}/>
        <Route path="/main/todolist" component={TodolistContainer}/>
        <Route path="/main/about" component={AboutContainer}/>
        <Route component={LoginContainer}/>
    </Switch>
);

export default ContentRouter;