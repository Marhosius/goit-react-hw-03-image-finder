import React, { Component } from 'react';
import css from './Button.module.css'
import propTypes from 'prop-types';

export class Button extends Component {
    render() {
        return (
            <button className={css.Button} onClick={this.props.handleNextPage}>Load more</button>
        )
    }
}

Button.propTypes = {
    handleNextPage: propTypes.func.isRequired,
}

export default Button
