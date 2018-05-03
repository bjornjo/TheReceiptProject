import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';

import ebby from './../../img/ebby.png';
import payr from './../../img/payr.png';
import globalblue from './../../img/globalblue.png';
import aispot from './../../img/aispot.png';
import sevenoffice from './../../img/sevenoffice.png';
import visma from './../../img/visma.png';
import bankbridge from './../../img/bankbridge.png';
import bsmart from './../../img/bsmart.png';

export default class MyModal extends React.Component {
    state = {
        open: false
    };

    onOpenModal = () => {
        this.setState({open: true});
    };

    onCloseModal = () => {
        this.setState({open: false});
    };

    render() {
        const {open} = this.state;
        
        return (
            <div>
                <div onClick={this.onOpenModal} className="interested-btn">Interested?</div>
                <Modal open={open} onClose={this.onCloseModal} little>
                    <p>{this.props.children}</p>
                </Modal>
            </div>
        );
    }
}
