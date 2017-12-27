import React, {Component} from 'react';

export default class TodolistAdd extends Component {
    constructor(props){
        super(props);
        this.newTodoText = null;
    }

    postNewTodoItem = async ()=>{
        if(!this.newTodoText.value){
            alert('Please input todo item.');
            return;
        }
        await this.props.addTodolist(this.newTodoText.value);
        this.newTodoText.value='';
        await this.props.getTodolist();
    }
  
    render() {
        return (
            <div className="todolist-add-new">
                <textarea ref={ref=>this.newTodoText=ref}/>
                <button  onClick={()=>{this.postNewTodoItem()}} >AddNew</button>
            </div>  
        )
    }
}

