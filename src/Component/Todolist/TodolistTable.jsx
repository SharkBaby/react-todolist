import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTodolist,deleteTodolist,updateTodolist,selectTodolistItem} from '../../Redux/Action/TodoListAction';
import {openDialog,closeDialog} from '../../Redux/Action/DialogAction';
import Modal from 'react-modal';
import {DialogStyle} from '../../Util/Constants'


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

    closeModal(name) {
        this.props.closeDialog(name);
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
                
                <Modal 
                    isOpen={this.props.dialogMap.get(editTodolistItemDialog)}
                    style={DialogStyle}
                    >
                    <div className="todolist-dialog-textarea">
                        <span>Please input new todo text</span>
                        <br/>
                        <textarea 
                            ref={ref=>this.editedItem=ref} 
                            defaultValue={this.props.todolistItem.get("text")}
                        />
                    </div>
                    <div className="todolist-dialog-button">
                        <button  onClick={()=>{this.updateTodolist()} }>Submit</button>
                        <button  onClick={()=>{this.closeModal(editTodolistItemDialog)}}>Close</button>
                    </div>
                </Modal>

                <Modal 
                    isOpen={this.props.dialogMap.get(deleteTodolistItemDialog)}
                    style={DialogStyle}
                   
                    >
                    <div className="todolist-dialog-textarea">
                        <span>Do you want to delete:</span>
                        <br/> 
                        {this.props.todolistItem.get("text")}
                    </div>
                    <div className="todolist-dialog-button">
                        <button onClick={()=>{this.deleteTodolist()}}>Submit</button>
                        <button onClick={()=>{this.closeModal(deleteTodolistItemDialog)}}>Close</button>
                    </div>
                </Modal>
            </div>
        )
    }
}
export default connect(
    state=> {
        const map = state["todolistReducer"];
        const dialogMap = state["dialogReducer"];
        return {
            todolist:map.get("todolist"),
            isFetching:map.get("isFetching"),
            todolistItem:map.get('todolistItem'),
            dialogMap:dialogMap,
        };
    },
    {getTodolist,deleteTodolist,updateTodolist,openDialog,closeDialog,selectTodolistItem}
)(TodolistTable)
