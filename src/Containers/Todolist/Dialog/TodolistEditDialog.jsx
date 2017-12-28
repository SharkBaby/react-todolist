import React, {Component} from 'react';
import Dialog from '../../../Components/Dialog/Dialog';

export default class TodolistEditDialog extends Component {
    constructor(props){
        super(props);
        this.editedItem = null;
    }

    updateTodolist=async ()=>{
        if(!this.editedItem.value){
            alert('please input new text');
            return;
        }
        await this.props.updateTodolist(this.props.todolistItem.get('id'),this.editedItem.value);
        await this.props.getTodolist();
        this.props.closeDialog(this.props.dialogName);
    }

    render() {
        return (
            <Dialog name={this.props.dialogName}>
                <div className="todolist-dialog-textarea">
                    <span>Please input new todo text</span>
                    <br/>
                    <textarea 
                        ref={ref=>this.editedItem=ref} 
                        defaultValue={this.props.todolistItem.get("text")}
                    />
                </div>
                <div className="dialog-confirm">
                    <button onClick={this.updateTodolist}>Submit</button>
                </div>
            </Dialog>
        )
    }
}

