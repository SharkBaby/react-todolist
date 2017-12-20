import {createReducer} from './CreateReducer'
import {Map} from 'immutable'

const defaultState = Map(
);

const openDialog = (state, action)=>{
    state = state.set(action.name, true);
    return state
}

const closeDialog = (state, action)=>{
    state = state.set(action.name,false)
    return state
}

export const dialogReducer = createReducer(defaultState, {
    'OPEN_DIALOG':openDialog,
    'CLOSE_DIALOG':closeDialog,
});