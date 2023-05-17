import React, { Component } from 'react';
import Notiflix from 'notiflix';
import css from "./Searchbar.module.css"
import propTypes from 'prop-types';

export class Searchbar extends Component {
    state = {
        value: "",
    }

    onInputChange = ({ target: { value } }) => { if (value.trim()) this.setState({ value }) }

    submitHandler = (e) => {
        const { value } = this.state
        e.preventDefault()
        if (value.length <= 1) {
            Notiflix.Notify.warning("use more specifically request", { position: 'center-top' })
            return
        }
        this.props.onSubmit(value)
        this.setState({ value: "" })

    }




    render() {
        return (
            <header className={css.Searchbar}>
                <form className={css.SearchForm} onSubmit={this.submitHandler}>
                    <button type="submit" className={css.SearchFormButton}>
                        <span className={css.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        onChange={this.onInputChange}
                        value={this.state.value}
                        className={css.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: propTypes.func.isRequired,
}

export default Searchbar
