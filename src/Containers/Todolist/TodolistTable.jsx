import React, {Component,Fragment} from 'react';
import TodolistEditDialog from './Dialog/TodolistEditDialog';
import TodolistDeleteDialog from './Dialog/TodolistDeleteDialog'

const editTodolistItemDialog = 'editTodolistItemDialog';
const deleteTodolistItemDialog = 'deleteTodolistItemDialog';

export default class TodolistTable extends Component {
    
    //////////////////////////////////////////////
    //                                          //
    //      | id | todotext | edit | Delete|    //
    //           <Todolist>                     //
    //           <Todolist>                     //
    //                  ...                     //
    //////////////////////////////////////////////

    constructor(props){
        super(props)
    }

    componentDidMount () {
        this.props.getTodolist();
    }

    openModal = (dialogName,todoitem)=>{
        this.props.openDialog(dialogName);
        this.props.selectTodolistItem(todoitem);
    }

    
    render() {
        return (
            <Fragment>
                <table className="common-table">
                    <thead>
                        <tr>
                            <th>Text</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className="todolist-table">
                        {
                            this.props.todolist.map((todoitem)=>{
                                return(  
                                    <tr>
                                        <td>{todoitem.text}</td>
                                        <td >
                                            <button 
                                                className="editbutton" 
                                                onClick={()=>{this.openModal(editTodolistItemDialog,todoitem)}}
                                            >
                                                Edit
                                            </button>
                                        </td>
                                        <td>
                                            <button 
                                                className="deletebutton" 
                                                onClick={()=>{this.openModal(deleteTodolistItemDialog,todoitem)}}
                                            />
                                        </td>
                                    </tr>
                                    )
                            })
                        }
                    </tbody>
                </table>
                <TodolistEditDialog dialogName={editTodolistItemDialog} {...this.props}/> 
                <TodolistDeleteDialog dialogName={deleteTodolistItemDialog} {...this.props}/>
            </Fragment>
        )
    }
}

