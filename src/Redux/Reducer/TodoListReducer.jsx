import {createReducer} from './CreateReducer'
import {Map,Set, OrderedMap,List} from 'immutable'

const defaultState = Map({
    isFetching:false,
    todolist:List(),
    todolistItem:Map()
});

const todolistWillGet=(state, action) => {
    return state.set('isFetching',true);
}

const todolistDidGet=(state, action) => {
    if(action.isSuccess)
    {
        state = state.set("todolist", List(action.content));
        if(action.isSuccess && typeof action.callback === 'function'){
            action.callback();
        }
        return state;
    }
    return state.set('isFetching',false);
}

const todolistDidAdd=(state, action) => {
    if(action.isSuccess && typeof action.callback === 'function'){
        action.callback();
    }
    return state;
}

const todolistDidDelete=(state, action) => {

    if(action.isSuccess && typeof action.callback === 'function'){
        action.callback();
    }
    return state;
}

const todolistDidUpdate=(state, action) => {
    if(action.isSuccess && typeof action.callback === 'function'){
        action.callback();
    }
    return state;
}

const todolistDidSelect = (state,action)=>{
    state = state.set('todolistItem', Map(action.todolistItem));
    return state;
}

export const todolistReducer = createReducer(defaultState, {
    "TODOLIST_WILL_GET":todolistWillGet,
    "TODOLIST_DID_GET":todolistDidGet,
    "TODOLIST_DID_ADD":todolistDidAdd,
    "TODOLIST_DID_DELETE": todolistDidDelete,
    'TODOLIST_DID_UPDATE':todolistDidUpdate,
    'TODOLISTITEM_DID_SELECT':todolistDidSelect,
})