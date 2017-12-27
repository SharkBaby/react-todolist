import React from 'react';
import {Route, Switch ,Redirect} from 'react-router-dom';
import TodolistContainer from '../Containers/Todolist/TodolistContainer'
import AboutContainer from '../Containers/About/AboutContainer'

const ContentRouter = (props) => (
    <main className="home-content">
        <Switch>
            <Route path="/home/todolist" component={TodolistContainer}/>
            <Route path="/home/about" component={AboutContainer}/>
            <Redirect from="/home" to="/home/todolist" />
        </Switch>
    </main>
);

export default ContentRouter;