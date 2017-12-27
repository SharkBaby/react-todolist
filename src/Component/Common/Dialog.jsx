import React, {Component} from 'react';
import {connect} from 'react-redux';
import {closeDialog} from '../../Redux/Action/DialogAction';
import Modal from 'react-modal';
import {DialogStyle} from '../../Util/Constants'

class Dialog extends Component {
    constructor(props){
        super(props)
        this.dialogName = this.props.name;
    }

    closeModal(name) {
        this.props.closeDialog(name);
    }

    render() {
        return (
            <Modal 
            isOpen={this.props.dialogMap.get(this.dialogName)}
            style={DialogStyle}
            >
                <button className="dialog-delete" onClick={()=>{this.closeModal(this.dialogName)}} />
                {this.props.children}
            </Modal>
        );
    }
}

export default connect(
    state=> {
        const dialogMap = state['dialogReducer'];
        return {
            dialogMap:dialogMap,
        };
    },
    {closeDialog}
)(Dialog)