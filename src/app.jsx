import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import {Provider} from 'react-redux'
import store from './Redux/Store/Store'
import MainRouter from './Routers/MainRouter'

import './Style/Base.css'
import './Style/Home.css'
import './Style/Common.css'
import './Style/Todolist.css'

store.subscribe(() => { 
   
});

ReactDOM.render(
    <Provider store={store}>
        <MainRouter />
    </Provider>,
     document.getElementById('root')
);
