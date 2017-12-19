import {createReducer} from './CreateReducer'
import {Map} from 'immutable'

const defaultState = Map(
    {
        dialogopen:false
    }
);

const openDialog = (state, action)=>{
    state = state.set('dialogopen', true);
    return state
}

const closeDialog = (state, action)=>{
    state = state.set('dialogopen',false)
    return state
}

export const dialogReducer = createReducer(defaultState, {
    'OPEN_DIALOG':openDialog,
    'CLOSE_DIALOG':closeDialog,
});