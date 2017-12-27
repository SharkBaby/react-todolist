import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './Redux/Store/Store';
import MainRouter from './Router/MainRouter';

import './Assets/Styles/Base.css';
import './Assets/Styles/Common.css';

store.subscribe(() => { 
   
});

ReactDOM.render(
    <Provider store={store}>
        <MainRouter />
    </Provider>,
     document.getElementById('root')
);
