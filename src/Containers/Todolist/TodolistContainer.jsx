import React, {Component} from 'react';
import TodolistTable from './TodolistTable';
import TodolistAdd from './TodolistAdd';
import * as todolistAction from '../../Redux/Action/TodoListAction';
import * as dialogAction from '../../Redux/Action/DialogAction';
import {connect} from 'react-redux';

import './Todolist.css';

class TodolistContainer extends Component{
    //////////////////////////////////////////////
    //                                          //
    //      | id | todotext | edit | Delete|    //
    //      |    |          |      |       |    //
    //      |    |          |      |       |    //
    // _________________________________________//
    //      ____________________   _________    //
    //     | __________________ | |_Add_new_|   //
    //                                          //
    //////////////////////////////////////////////

    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <div>
                <TodolistTable {...this.props}/>
                <TodolistAdd {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps =  state=> {
    const map = state['todolistReducer'];
    return {
        todolist:map.get('todolist'),
        isFetching:map.get('isFetching'),
        todolistItem:map.get('todolistItem'),
    };
};
const mapDispatchToProps = Object.assign(todolistAction,dialogAction);
export default connect(mapStateToProps, mapDispatchToProps)(TodolistContainer);
