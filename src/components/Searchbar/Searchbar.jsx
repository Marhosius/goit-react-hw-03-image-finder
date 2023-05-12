import React, { Component } from 'react'

export class Searchbar extends Component {
    state = {
        value: "",
    }

    onInputChange = ({ target: { value } }) => this.setState({ value })

    submitHandler = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.value)
    }




    render() {
        return (
            <header className="searchbar">
                <form className="form" onSubmit={this.submitHandler}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        onChange={this.onInputChange}
                        value={this.state.value}
                        className="input"
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

export default Searchbar
