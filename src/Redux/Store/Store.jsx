import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {todolistReducer} from '../Reducer/TodoListReducer'
import {dialogReducer} from '../Reducer/DialogReducer'
import thunk from 'redux-thunk'

const args = [
    combineReducers({
        todolistReducer,
        dialogReducer
    })
  ];

  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    args.push(compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__()));
  } else {
    args.push(applyMiddleware(thunk));
  }

var store = createStore(...args);

export default store;