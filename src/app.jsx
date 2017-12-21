import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import {Provider} from 'react-redux'
import store from './Redux/Store/Store'
import router from './Routers/Router'
import './Style/Base.css'
import './Style/Home.css'
import './Style/Common.css'
import './Style/Todolist.css'

ReactDOM.render((
    <Provider store={store}>
       {router}
    </Provider>
), document.getElementById('root'))
