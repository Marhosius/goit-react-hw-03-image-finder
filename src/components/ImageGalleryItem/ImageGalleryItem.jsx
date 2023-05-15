import React, { Component } from 'react';
import css from "./ImageGalleryItem.module.css"

export class ImageGalleryItem extends Component {
    onImgClick = ({ target: { attributes } }) => {
        this.props.modalURLHandler(attributes.js.value)
        this.props.modalTogle()
    }
    render() {
        return (
            <li className={css.ImageGalleryItem}>
                <img onClick={this.onImgClick} js={this.props.largeImageURL} src={this.props.webformatURL} className={css.ImageGalleryItemImage} alt="" />
            </li>
        )
    }
}

export default ImageGalleryItem
