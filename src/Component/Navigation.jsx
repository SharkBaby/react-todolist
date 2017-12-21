import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export default class Navigation extends Component {
    render(){
        return (
            <ul className="navigation">
                <li><NavLink
                        to={`/home/todolist`}
                        exact
                        className = "navlink"
                    >
                        <span>Todo List</span>
                    </NavLink>
                </li>
                <li><NavLink
                        to={`/home/about`}
                        exact
                        className = "navlink"
                    >
                        <span>About</span>
                    </NavLink>
                </li>
            </ul>
        )
    }
}