import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

const Header =()=> {
    return (
        <header className="home-header">
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
        </header>
    )
}

export default Header;
