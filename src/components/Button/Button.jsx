import React, { Component } from 'react';
import css from './Button.module.css'

export class Button extends Component {
    render() {
        return (
            <button className={css.Button} onClick={this.props.handleNextPage}>Load more</button>
        )
    }
}

export default Button
