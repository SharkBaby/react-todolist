import {createReducer} from './CreateReducer'
import {Map} from 'immutable'

const defaultState = Map(
);

const openDialog = (state, action)=>{
    return state.set(action.name, true);
}

const closeDialog = (state, action)=>{
    return state.delete(action.name);
}

export const dialogReducer = createReducer(defaultState, {
    'DIALOG_WILL_OPEN':openDialog,
    'DIALOG_WILL_CLOSE':closeDialog,
});