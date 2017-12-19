import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../../Redux/Action/TodoListAction'

class AboutContainer extends Component {
    render() {
        return (
            <div>
                This is About page
            </div>
        )
    }
}
export default connect(
    state=> {

    },
    action,
)(AboutContainer)
