import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export default class Navigation extends Component {
    render(){
        return (
            <ul id="header-menu">
                <li><NavLink
                        to={`/main/todolist`}
                        exact
                        className="menu"
                        ><span>Todo List</span></NavLink></li>
                <li><NavLink
                        to={`/main/about`}
                        exact
                        className="menu"
                        ><span>About</span></NavLink>
                        </li>
            </ul>
        )
    }
}