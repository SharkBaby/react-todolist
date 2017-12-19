import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GetTodolist,AddTodolist,DeleteTodolist,UpdateTodolist} from '../../Redux/Action/TodoListAction';
import {openDialog,closeDialog} from '../../Redux/Action/DialogAction';
import Modal from 'react-modal';



class TodolistContainer extends Component {
    constructor(props){
        super(props)
        this.newTodoText = null;
    }

    componentDidMount () {
        this.props.GetTodolist();
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    deleteTodolist = (id)=>{
        this.props.DeleteTodolist(id, ()=>{
            this.timer = setTimeout(
                ()=>{
                    this.props.GetTodolist()
                },50)
        })
    }

        openModal=()=> {
           this.props.openDialog();
        }

      closeModal() {
        this.props.closeDialog();
      }

    postNewTodoItem = ()=>{
        console.log('click!');
        if(!this.newTodoText.value){
            alert("Please input todo item.")
            return;
        }

        this.props.AddTodolist(this.newTodoText.value,()=>{
            this.timer = setTimeout(
                ()=>{
                    this.props.GetTodolist()
                },50)
        })
    }

    updateTodolist=(todoItem)=>{

    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>todo text</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.todolist.map((todoitem)=>{
                                return(  
                                    <tr>
                                        <td>{todoitem.id}</td>
                                        <td>{todoitem.text}</td>
                                        <td>
                                            <button onClick={()=>{this.openModal()}}>Edit</button>
                                       

                                        </td>
                                        <td>
                                            <button onClick={()=>{this.deleteTodolist(todoitem.id)}} >Delete</button>
                                        </td>
                                    </tr>)
                            })
                        }
                    </tbody>
                </table>
                <div>
                    <textarea ref={ref=>this.newTodoText=ref}/>
                    <button onClick={()=>{this.postNewTodoItem()}} >AddNew</button>
                </div>
                                        <Modal 
                                            isOpen={this.props.dialogOpen}
                                            contentLabel="Minimal Modal Example"
                                            >
                                            <textarea ref={ref=>this.newTodoText=ref} defaultValue='hahahaha'/>
                                            <button onClick={()=>{this.closeModal()}}>Close Modal</button>
                                            <button onClick={()=>{this.updateTodolist()}}>Close Modal</button>
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
            dialogOpen:dialogMap.get("dialogopen")
        };
    },
    {GetTodolist,AddTodolist,DeleteTodolist,UpdateTodolist,openDialog,closeDialog}
)(TodolistContainer)
