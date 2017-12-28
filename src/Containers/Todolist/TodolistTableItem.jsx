import React, {Component} from 'react';
import Dialog from '../../Components/Dialog/Dialog';

const editTodolistItemDialog = 'editTodolistItemDialog';
const deleteTodolistItemDialog = 'deleteTodolistItemDialog';

export default class TodolistTableItem extends Component {
    constructor(props){
        super(props);
        this.editedItem = null;
    }

    deleteTodolist = async (id)=>{
        await this.props.deleteTodolist(id);
        await this.props.getTodolist();
    }

    openModal=(name)=> {
        this.props.openDialog(name);
        this.props.selectTodolistItem(this.props.todoitem);
    }

    updateTodolist=async ()=>{
        if(!this.editedItem.value){
            alert('please input new text');
            return;
        }
           console.log()
        await this.props.updateTodolist(this.props.todolistItem.get('id'),this.editedItem.value);
        await this.props.getTodolist();
        this.props.closeDialog(editTodolistItemDialog);
    }

    deleteTodolist=async ()=>{ 
        await this.props.deleteTodolist(this.props.todolistItem.get('id'));
        await this.props.getTodolist();
        this.props.closeDialog(deleteTodolistItemDialog);
    }

    render(){
        return(
            <tr>
                <td>{this.props.todoitem.text}</td>
                <td >
                    <button 
                        className="editbutton" 
                        onClick={()=>{this.openModal(editTodolistItemDialog)}}
                    >
                        Edit
                    </button>
                </td>
                <td>
                    <button 
                        className="deletebutton" 
                        onClick={()=>{this.openModal(deleteTodolistItemDialog)}} 
                    />
                </td>
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
            </tr>
        )
    }
}