import React from 'react';
import {Route, Switch ,Redirect} from 'react-router-dom';
import TodolistContainer from '../Todolist/TodolistContainer'
import AboutContainer from '../About/AboutContainer'
import LoginContainer from '../LoginContainer'

const ContentRouter = (props) => (
    <Switch>
        <Route path="/main/todolist" component={TodolistContainer}/>
        <Route path="/main/about" component={AboutContainer}/>
        <Redirect from="/main" to="/main/todolist" />
        <Route component={LoginContainer}/>
    </Switch>
);

export default ContentRouter;