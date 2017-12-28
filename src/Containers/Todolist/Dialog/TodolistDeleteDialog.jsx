import React, {Component} from 'react';
import Dialog from '../../../Components/Dialog/Dialog'

export default class TodolistEditDialog extends Component {
    constructor(props){
        super(props);
    }


    deleteTodolist=async ()=>{ 
        await this.props.deleteTodolist(this.props.todolistItem.get('id'));
        await this.props.getTodolist();
        this.props.closeDialog(this.props.dialogName);
    }

    render() {
        return (
            <Dialog name={this.props.dialogName}>
                <div className="todolist-dialog-textarea">
                    <span>Do you want to delete:</span>
                    <br/> 
                    {this.props.todolistItem.get("text")}
                </div>
                <div className="dialog-confirm">
                    <button onClick={this.deleteTodolist}>Submit</button>
                </div>
            </Dialog>
        )
    }
}

