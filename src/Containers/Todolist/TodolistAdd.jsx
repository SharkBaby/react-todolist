import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodolist,getTodolist} from '../../Redux/Action/TodoListAction';


class TodolistAdd extends Component {
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

const mapDispatchToProps = {
    addTodolist,
    getTodolist
};
export default connect(null,mapDispatchToProps)(TodolistAdd)
