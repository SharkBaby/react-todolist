import React, {Component} from 'react';
import TodolistTableItem from './TodolistTableItem';

export default class TodolistTable extends Component {
    
    //////////////////////////////////////////////
    //                                          //
    //      | id | todotext | edit | Delete|    //
    //           <TodolistTableItem>            //
    //           <TodolistTableItem>            //
    //                  ...                     //
    //////////////////////////////////////////////

    constructor(props){
        super(props)
    }

    componentDidMount () {
        this.props.getTodolist();
    }

    render() {
        return (
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
                                <TodolistTableItem todoitem={todoitem} {...this.props}/>
                                )
                        })
                    }
                </tbody>
            </table>
        )
    }
}
