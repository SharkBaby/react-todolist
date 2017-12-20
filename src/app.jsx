import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import {Provider} from 'react-redux'
import store from './Redux/Store/Store'
import router from './Routers/Router'


ReactDOM.render((
    <Provider store={store}>
       {router}
    </Provider>
), document.getElementById('root'))
