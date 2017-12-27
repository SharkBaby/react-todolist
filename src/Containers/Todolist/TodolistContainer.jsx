import React, {Component} from 'react';
import TodolistTable from '../../Components/Todolist/TodolistTable';
import TodolistAdd from '../../Components/Todolist/TodolistAdd';
import './Todolist.css';

const TodolistContainer=()=>{
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
    return (
        <div>
            <TodolistTable />
            <TodolistAdd />
        </div>
    )
}

export default TodolistContainer;
