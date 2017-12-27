import React, {Component} from 'react';
import TodolistTable from './TodolistTable';
import TodolistAdd from './TodolistAdd';
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
