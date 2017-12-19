import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../../Redux/Action/TodoListAction'

class TodolistContainer extends Component {
    componentDidMount () {
        //this.props.GetTodolist();
    }

    render() {
        return (
            <div>
                This is todolist page
            </div>
        )
    }
}
export default connect(
    state=> {
        const map = state["todolistReducer"];
        return {
            todolist:map.get("todolist"),
            isFetching:map.get("isFetching"),
        };
    },
    action,
)(TodolistContainer)
