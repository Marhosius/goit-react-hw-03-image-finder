import React, { Component } from 'react';
import css from "./Modal.module.css"
import propTypes from 'prop-types';

export class Modal extends Component {
    componentDidMount = () => {
        document.addEventListener('keydown', this.onESK)
    }
    componentWillUnmount = () => {
        document.removeEventListener('keydown', this.onESK)
    }

    onESK = (e) => {
        if (e.code === 'Escape') {
            this.props.modalTogle()
        }
    }

    render() {
        return (
            <div onClick={this.props.modalTogle} className={css.Overlay}>
                <div className={css.Modal}>
                    <img src={this.props.modalURL} alt="modal" />
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    modalURL: propTypes.string.isRequired,
    modalTogle: propTypes.func.isRequired,
}

export default Modal
