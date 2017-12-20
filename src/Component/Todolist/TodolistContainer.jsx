import React, {Component} from 'react';
import TodolistTable from './TodolistTable'
import TodolistAdd from './TodolistAdd'

export default class TodolistContainer extends Component {

    render() {
        return (
            <div>
                <TodolistTable />
                <TodolistAdd />
            </div>
        )
    }
}

