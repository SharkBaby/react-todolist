import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTodolist,deleteTodolist,updateTodolist,selectTodolistItem} from '../../Redux/Action/TodoListAction';
import {openDialog,closeDialog} from '../../Redux/Action/DialogAction';
import Dialog from '../Dialog/Dialog';

const editTodolistItemDialog = 'editTodolistItemDialog';
const deleteTodolistItemDialog = 'deleteTodolistItemDialog';

class TodolistTable extends Component {
    constructor(props){
        super(props)
        this.editedItem = null;
    }

    componentDidMount () {
        this.props.getTodolist();
    }

    deleteTodolist = async (id)=>{
        await this.props.deleteTodolist(id);
        await this.props.getTodolist();
    }

    openModal=(name,todoitem)=> {
        this.props.openDialog(name);
        this.props.selectTodolistItem(todoitem);
    }

    updateTodolist=async ()=>{
        if(!this.editedItem.value){
            alert('please input new text');
            return;
        }
           
        await this.props.updateTodolist(this.props.todolistItem.get('id'),this.editedItem.value);
        await this.props.getTodolist();
        this.props.closeDialog(editTodolistItemDialog);
    }

    deleteTodolist=async ()=>{ 
        await this.props.deleteTodolist(this.props.todolistItem.get('id'));
        await this.props.getTodolist();
        this.props.closeDialog(deleteTodolistItemDialog);
    }

    render() {
        return (
            <div>
                <table className="common-table">
                    <thead>
                        <tr>
                            <th>todo text</th>
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
                
                <Dialog name={editTodolistItemDialog}>
                     <div className="todolist-dialog-textarea">
                        <span>Please input new todo text</span>
                        <br/>
                        <textarea 
                            ref={ref=>this.editedItem=ref} 
                            defaultValue={this.props.todolistItem.get("text")}
                        />
                    </div>
                    <div className="dialog-confirm">
                        <button onClick={()=>{this.updateTodolist()} }>Submit</button>
                    </div>
                </Dialog>

                <Dialog name={deleteTodolistItemDialog}>
                    <div className="todolist-dialog-textarea">
                        <span>Do you want to delete:</span>
                        <br/> 
                        {this.props.todolistItem.get("text")}
                    </div>
                    <div className="dialog-confirm">
                        <button onClick={()=>{this.deleteTodolist()}}>Submit</button>
                    </div>
                </Dialog>
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
const mapDispatchToProps = {
    getTodolist,
    deleteTodolist,
    updateTodolist,
    openDialog,
    closeDialog,
    selectTodolistItem
}
export default connect(mapStateToProps, mapDispatchToProps)(TodolistTable);
