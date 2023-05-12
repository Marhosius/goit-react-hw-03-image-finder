import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';



export class App extends Component {
  state = {
    searchingValue: "",
  }

  onSubmit = (searchingValue) => this.setState({ searchingValue });

  render() {
    return (
      <div className="container">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery searchingValue={this.state.searchingValue}></ImageGallery>
      </div>
    );
  };
}
