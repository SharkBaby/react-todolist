import React, {Component} from 'react';
import {connect} from 'react-redux';
import {closeDialog} from '../../Redux/Action/DialogAction';
import Modal from 'react-modal';

const DialogStyle = {
    overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(0, 0, 0, 0.5)'
      },
      content : {
        width             :'auto',
        height            :'auto',
        minWidth          :'500px',
        maxHeight         :'90%',
        padding           :'30px',
        top               :'50%',
        left              :'50%',
        right             :'auto',
        bottom            :'auto',
        marginRight       :'-50%',
        transform         :'translate(-50%, -50%)',
        boxShadow         :'4px 4px 6px 0px rgba(0,0,0,0.5)',
        overflow          :'auto',
        borderRadius      :'2px'
     
      }
};

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

const mapStateToProps =  state=> {
    const dialogMap = state['dialogReducer'];
    return {
        dialogMap,
    };
};
const mapDispatchToProps = {
    closeDialog
}
export default connect(mapStateToProps, mapDispatchToProps)(Dialog);