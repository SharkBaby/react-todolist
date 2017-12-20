import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GetTodolist,AddTodolist,DeleteTodolist,UpdateTodolist,SelectTodolistItem} from '../../Redux/Action/TodoListAction';
import {openDialog,closeDialog} from '../../Redux/Action/DialogAction';
import Modal from 'react-modal';


const customStyles = {
    overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(0, 0, 0, 0.5)'
      },
      content : {
        position                   : 'absolute',
        top                        : '400px',
        left                       : '400px',
        right                      : '400px',
        bottom                     : '400px',
        border                     : '1px solid #ccc',
        background                 : '#fff',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '4px',
        outline                    : 'none',
        padding                    : '20px'
     
      }
  };
  
class TodolistContainer extends Component {
    constructor(props){
        super(props)
        this.newTodoText = null;
        this.editedItem = {};
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

        openModal=(name,todoitem)=> {
           this.props.openDialog(name);
           this.props.SelectTodolistItem(todoitem);
        }

      closeModal(name) {
        this.props.closeDialog(name);
      }

    postNewTodoItem = ()=>{
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

    updateTodolist=()=>{
        if(!this.editedItem.value)
            alert('please input new text');
        this.props.closeDialog('EditTodolistDialog');
        this.props.UpdateTodolist(this.props.todolistItem.get('id'),this.editedItem.value,()=>{
            this.timer = setTimeout(
                ()=>{
                    this.props.GetTodolist();
                },50)
        })
    }
    deleteTodolist=()=>{
        this.props.closeDialog('DeleteTodolistDialog');
        this.props.DeleteTodolist(this.props.todolistItem.get('id'),()=>{
            this.timer = setTimeout(
                ()=>{
                    this.props.GetTodolist();
                },50)
        })
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
                                            <button onClick={()=>{this.openModal('EditTodolistDialog',todoitem)}}>Edit</button>
                                       

                                        </td>
                                        <td>
                                            <button onClick={()=>{this.openModal('DeleteTodolistDialog',todoitem)}} >Delete</button>
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
                            isOpen={this.props.EditTodolistDialog}
                            contentLabel="Edit"
                            style={customStyles}
                            shouldCloseOnOverlayClick={true}
                            >
                            <textarea ref={ref=>this.editedItem=ref} defaultValue={this.props.todolistItem.get('text')}/>
                            <button onClick={()=>{this.updateTodolist()}}>Submit</button>
                            <button onClick={()=>{this.closeModal('EditTodolistDialog')}}>Close</button>
                        </Modal>
                        <Modal 
                            isOpen={this.props.DeleteTodolistDialog}
                            contentLabel="Delete"
                            style={customStyles}
                            shouldCloseOnOverlayClick={true}
                            >
                            Do you want to delete:{this.props.todolistItem.get('text')}
                            <button onClick={()=>{this.deleteTodolist()}}>Submit</button>
                            <button onClick={()=>{this.closeModal('DeleteTodolistDialog')}}>Close</button>
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
            EditTodolistDialog:dialogMap.get("EditTodolistDialog"),
            DeleteTodolistDialog:dialogMap.get("DeleteTodolistDialog"),
            todolistItem:map.get('todolistItem'),
        };
    },
    {GetTodolist,AddTodolist,DeleteTodolist,UpdateTodolist,openDialog,closeDialog,SelectTodolistItem}
)(TodolistContainer)
